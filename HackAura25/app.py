from flask import Flask, request, jsonify
app = Flask(_name_)

# Dummy in-memory "database"
timetable = []

@app.route('/add', methods=['POST'])
def add_schedule():
    data = request.get_json()
    timetable.append(data)
    return jsonify({'status': 'success'})

@app.route('/get', methods=['GET'])
def get_schedule():
    return jsonify(timetable)

if _name_ == '_main_':
    app.run(debug=True)