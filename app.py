from flask import *
import os,shutil, datetime,requests

app = Flask(__name__,static_folder="static", template_folder=os.getcwd())

def gemini(prompt):
	return requests.post(f'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={GEMINI_API_KEY}', headers={'Content-Type': 'application/json'}, json={'contents': [{'parts': [{'text': prompt}]}]}).json()['candidates'][0]["content"]["parts"][0]["text"].replace("*","")

@app.route("/",methods=["GET","POST"])
def index():
	if request.method == "GET":
		return render_template("index.html")
	else:
		w=[request.form["salary"], request.form["occupation"], request.form["distance"]]
		return gemini(open('cars',"r").read()+f"Suggest 2 cars for person , with Salary {w[0]}, Occupation = {w[1]}, and work distance = {w[2]} and show the comparison between them in points, no tabular form").replace("\n","<br>")

if __name__ == '__main__':
	app.run(host="0.0.0.0",debug=True)