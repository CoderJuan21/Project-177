from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

answer_dict={
    "1":["Chess"],
    "2":["France"],
            }


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/get-template")
def get_template():
    return jsonify({
    "status":"success",
    "word": random.choice(templates)
})

if __name__ == "__main__":
    app.run(debug=True)