from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])

@app.route("/name", methods=["GET"])

def get_name():
    return jsonify({"name":"user"})

@app.route("/app",methods=["GET"])

def get_app():
    return jsonify({
        "application":"Python backend",
        "status":"running"
    })

@app.route("/users",methods=["GET"])

def get_users():
    return jsonify({
        "users":["alex","stacy","Gary"]
    })

def home():
    return jsonify({"message":"Hello from Python endpoint"})

if __name__ == "__main__":    
    app.run(host= "0.0.0.0", port=5000)

