from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import yaml

app = Flask(__name__)
config = yaml.load(open('database.yaml'))
client = MongoClient(config['uri'])
db = client['prject1-dev']
CORS(app)


@app.route('/')
def index():
    return "Prasad Poject1-login"

@app.route('/users', methods=['POST', 'GET'])
def data():
        if request.method == 'POST':
            body = request.json
            
            firstName = body['fname']
            lastName = body['lname']
            emailId = body['email'] 
            City = body['city']
            State = body['state']
            Zip = body['zip']
            Password = body['password']
            ConfirmPassword = body['confirmPassword']
            print("insert firstName", firstName)
            
            # db.users.insert_one({
            db['users_list'].insert_one({
                "firstName": firstName,
                "lastName": lastName,
                "emailId":emailId,
                "Password":Password,
                "City":City,
                "State":State,
                "Zip":Zip,
                'ConfirmPassword':ConfirmPassword
            })
            # allData = db['users'].find()
            # 
            return jsonify({
                'status': 'Data is posted to MongoDB!',
                'firstName': firstName,
                'lastName': lastName,
                'emailId':emailId,
                "Password":Password,
                "City":City,
                "State":State,
                "Zip":Zip,
                'ConfirmPassword':ConfirmPassword
            })
        # if request.method == 'GET':
        #     allData = db['users'].find()
        #     dataJson = []
        #     for data in allData:
        #         id = data['_id']
        #         firstName = data['firstName']
        #         lastName = data['lastName']
        #         emailId = data['emailId']
        #         Password = data['Password']
        #         dataDict = {
        #             'id': str(id),
        #             'firstName': firstName,
        #             'lastName': lastName,
        #             'emailId': emailId,
        #             "Password":Password
        #         }
        #         dataJson.append(dataDict)
        #     print(dataJson)
        #     return jsonify(dataJson)
@app.route('/login', methods=['GET', 'PUT'])
def logindata():

        if request.method == 'PUT':
            body = request.json
            print(body)
            emailId = body['email']
            loginPassword = body['password']
            print(emailId)
            
            data = db['users_list'].find_one({'emailId':emailId})
            Password = data['Password']
            
            if (loginPassword == Password):
                id = data['_id']
                firstName = data['firstName']
                lastName = data['lastName']
                emailId = data['emailId']
                dataDict = {
                    'id': str(id),
                    'firstName': firstName,
                    'lastName': lastName,
                    'emailId':emailId
                }
                print(dataDict)
                return jsonify(dataDict)
            else:
                return "Wrong Password"

if(__name__=='__main__'):
    app.run(debug=True)