from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)

class FormData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    subject = db.Column(db.String(120), nullable=False)

@app.route('/api/form', methods=['POST'])
def handle_form():
    data = request.get_json()
    new_entry = FormData(
        name=data['name'], 
        subject=data['subject']
        )
    db.session.add(new_entry)
    db.session.commit()
    return jsonify({'message': 'Data received!'})

@app.route('/api/form', methods=['GET'])
def get_all_entries():
    entries = FormData.query.order_by(FormData.id.desc()).all()  # Сортировка по id в порядке убывания
    result = []
    for entry in entries:
        entry_data = {
            'id': entry.id,
            'name': entry.name,
            'subject': entry.subject,
        }
        result.append(entry_data)
    return jsonify(result)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)