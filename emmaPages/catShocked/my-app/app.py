from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def hello_world():
    return jsonify(message='Goodbye, World!')

def count_even_numbers(numbers):
    return sum(1 for num in numbers if num % 3 == 0)

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
        df = pd.read_csv('KEXP_Playlist_2020.csv')
        # Convert DataFrame to JSON
        data = df.to_json(orient='records')
        return data
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)


