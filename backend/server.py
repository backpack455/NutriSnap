from flask import Flask
from flask_restful import Api, Resource, abort, reqparse
from flask_cors import CORS
from model import classify_nutrients


    
    
#FLASK SETUP
app = Flask(__name__)
api = Api(app)
CORS(app)


#THERAPY DIAGNOSER
nutrition_classifier_post_args = reqparse.RequestParser()
nutrition_classifier_post_args.add_argument("user_images", help="Please Add Images", required=True, location='form')


class nutrition_classifier(Resource): 
    def post(self):
        
        user_input = nutrition_classifier_post_args.parse_args()
        nutrients = classify_nutrients(user_input['user_images'])
        
        return nutrients
    
    def get(self):
        return {"output": "SUCCESS"}


api.add_resource(nutrition_classifier, '/classifier')

if __name__ == "__main__":
    app.run(debug=True, port=3001)