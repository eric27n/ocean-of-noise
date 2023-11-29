from flask import Flask, request, jsonify
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler
import re
import json
import random

from fuzzywuzzy import fuzz, process
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import dotenv_values
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for your entire Flask app.

@app.route('/api/data')
def hello_world():
    return jsonify(message='Goodbye, World!')

def count_even_numbers(numbers):
    return sum(1 for num in numbers if num % 3 == 0)

def extract_year(date_str):
    try:
        if re.match(r'^\d{4}-00-00$', date_str):
            return int(date_str[:4])
        date_obj = pd.to_datetime(date_str)
        return date_obj.year if pd.notnull(date_obj) else None
    except Exception as e:
        print(f"Error for value '{date_str}': {e}")
        return None

def convert_to_seconds(time_str):
    minutes, seconds = map(int, time_str.split(':'))
    return minutes * 60 + seconds

def recommend_tracks(track_index, df):
    scaler = MinMaxScaler()
    df_normalized = pd.DataFrame(scaler.fit_transform(df), columns=df.columns)

    # Compute cosine similarity matrix
    cosine_sim = cosine_similarity(df_normalized, df_normalized)
    
    # Get similarity scores for the given track index
    sim_scores = list(enumerate(cosine_sim[track_index]))
    
    # Sort tracks based on similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    
    # Get top 5 similar tracks (excluding the input track itself)
    top_similar_tracks = sim_scores[1:6]
    
    # Return indices of recommended tracks
    recommended_indices = [i for i, _ in top_similar_tracks]
    return recommended_indices

def recommend_tracks_for_new_track(new_track, df):
    # Convert the new track into a DataFrame and normalize its values
    scaler = MinMaxScaler()
    df_normalized = pd.DataFrame(scaler.fit_transform(df), columns=df.columns)
    cosine_sim = cosine_similarity(df_normalized, df_normalized)

    new_track_df = pd.DataFrame([new_track], columns=df.columns)
    new_track_normalized = scaler.transform(new_track_df)
    
    # Compute cosine similarity between the new track and existing tracks
    cosine_sim_new = cosine_similarity(new_track_normalized, df)
    
    # Get similarity scores for the new track
    sim_scores = list(enumerate(cosine_sim_new[0]))
    
    # Sort tracks based on similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    
    # Get top 5 similar tracks
    top_similar_tracks = sim_scores[:5]
    
    # Return indices of recommended tracks
    recommended_indices = [i for i, _ in top_similar_tracks]
    return recommended_indices

@app.route('/count-evens', methods=['POST'])
def count_evens():
    data = request.json
    if not data or 'numbers' not in data:
        return jsonify({'error': 'No numbers provided'}), 400

    numbers = data['numbers']
    if not all(isinstance(n, int) for n in numbers):
        return jsonify({'error': 'All items must be integers'}), 400

    count = count_even_numbers(numbers)
    return jsonify({'even_numbers_count': count})

@app.route('/api/kexp', methods=['GET'])
def get_kexp_data():
    try:
        # Read the CSV file
        kexp_df_17 = pd.read_csv('../public/data/KEXP Song of the Day 2017.csv')
        kexp_df_18 = pd.read_csv('../public/data/KEXP Song of the Day 2018.csv')
        kexp_df_19 = pd.read_csv('../public/data/KEXP Song of the Day 2019.csv')
        kexp_df_20 = pd.read_csv('../public/data/KEXP Song of the Day 2020.csv')
        kexp_df_21 = pd.read_csv('../public/data/KEXP Song of the Day 2021.csv')
        kexp_df_22 = pd.read_csv('../public/data/KEXP Song of the Day 2022.csv')
        kexp_df_23 = pd.read_csv('../public/data/KEXP Song of the Day 2023.csv')
        kexp_df_at = pd.read_csv('../public/data/The Most Played Albums In KEXP History.csv')
        kexp_df = pd.concat([kexp_df_17, kexp_df_18, kexp_df_19, kexp_df_20, kexp_df_21, kexp_df_22, kexp_df_23, kexp_df_at], ignore_index=True)
        kexp_df.set_index('Spotify Track Id', inplace=True)
        kexp_df = kexp_df.drop(columns=["#", "Popularity"])
        kexp_df = kexp_df[~kexp_df.index.duplicated(keep='first')]
        kexp_df['Year'] = kexp_df['Album Date'].apply(extract_year)

        numerical_cols = ['Dance', 'Energy', 'Speech', 'Acoustic', 'Instrumental', 'Happy', 'BPM', 'Time', 'Year']
        kexp_df = kexp_df[numerical_cols]
        kexp_df['Time'] = kexp_df['Time'].apply(convert_to_seconds)
        df = kexp_df
        
        song = random.randint(0, len(df)-1)
        recommended_indices = recommend_tracks(song, df)

        indeces = []
        for i in recommended_indices:
            indeces.append(df.index[i])

        env_vars = dotenv_values('.flaskenv')
        client_id = env_vars['CLIENT_ID']
        client_secret = env_vars['CLIENT_SECRET']

        client_credentials_manager = SpotifyClientCredentials(
            client_id=client_id,
            client_secret=client_secret)
        sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

        records = []
        for i in range(5):
            records.append(sp.track(indeces[i]))
        list_of_json_dicts = [json.dumps(item) for item in records]
        
        # Convert DataFrame to JSON
        #data = df.to_json(orient='records')
        #json_string = json.dumps([ob for ob in indeces])
        return jsonify({"data": list_of_json_dicts})
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)