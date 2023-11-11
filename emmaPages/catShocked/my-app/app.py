from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def hello_world():
    return jsonify(message='Hello, World!')

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


if __name__ == '__main__':
    app.run(debug=True)


