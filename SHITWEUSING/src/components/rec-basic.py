import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import requests
import json
import time
from datetime import datetime
import calendar
import re

from fuzzywuzzy import fuzz, process
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import dotenv_values

kexp_df_17 = pd.read_csv('../../public/data/KEXP Song of the Day 2017.csv')
kexp_df_18 = pd.read_csv('../../public/data/KEXP Song of the Day 2018.csv')
kexp_df_19 = pd.read_csv('../../public/data/KEXP Song of the Day 2019.csv')
kexp_df_20 = pd.read_csv('../../public/data/KEXP Song of the Day 2020.csv')
kexp_df_21 = pd.read_csv('../../public/data/KEXP Song of the Day 2021.csv')
kexp_df_22 = pd.read_csv('../../public/data/KEXP Song of the Day 2022.csv')
kexp_df_23 = pd.read_csv('../../public/data/KEXP Song of the Day 2023.csv')
kexp_df_at = pd.read_csv('../../public/data/The Most Played Albums In KEXP History.csv')
kexp_df = pd.concat([kexp_df_17, kexp_df_18, kexp_df_19, kexp_df_20, kexp_df_21, kexp_df_22, kexp_df_23, kexp_df_at], ignore_index=True)
kexp_df.set_index('Spotify Track Id', inplace=True)
kexp_df = kexp_df.drop(columns=["#", "Popularity"])
kexp_df = kexp_df[~kexp_df.index.duplicated(keep='first')]

def extract_year(date_str):
    try:
        if re.match(r'^\d{4}-00-00$', date_str):
            return int(date_str[:4])
        date_obj = pd.to_datetime(date_str)
        return date_obj.year if pd.notnull(date_obj) else None
    except Exception as e:
        print(f"Error for value '{date_str}': {e}")
        return None

# Apply the function to the 'Album Date' column
kexp_df['Year'] = kexp_df['Album Date'].apply(extract_year)

def convert_to_seconds(time_str):
    minutes, seconds = map(int, time_str.split(':'))
    return minutes * 60 + seconds

numerical_cols = ['Dance', 'Energy', 'Speech', 'Acoustic', 'Instrumental', 'Happy', 'BPM', 'Time', 'Year']
kexp_df = kexp_df[numerical_cols]
kexp_df['Time'] = kexp_df['Time'].apply(convert_to_seconds)
df = kexp_df

import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler

# Function to recommend tracks based on similarity
def recommend_tracks(sim_scores):
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

def recommend_tracks_for_new_track(new_track):
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

# Example: Recommend tracks similar to track "Loading" by James Blake
track_index = [67,55,3,11,13,9,132,284,2023]
recommended_indices = recommend_tracks_for_new_track(track_index)

indeces = []
for i in recommended_indices:
    indeces.append(df.index[i])

env_vars = dotenv_values('.env')
client_id = env_vars['CLIENT_ID']
client_secret = env_vars['CLIENT_SECRET']

client_credentials_manager = SpotifyClientCredentials(
    client_id=client_id,
    client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

for i in range(5):
    print(sp.track(indeces[i]))