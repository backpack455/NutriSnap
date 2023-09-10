import base64
from PIL import Image
from PIL import ImageEnhance
from io import BytesIO
import os
from google.cloud import vision
import re

key_file_path = "visionkey.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] ='visionkey.json'

client = vision.ImageAnnotatorClient()

def classify_nutrients(base64_list):

    decoded_image_data = base64.b64decode(base64_list)
    client = vision.ImageAnnotatorClient()

    # Create an image object from the binary data
    image = vision.Image(content=decoded_image_data)

    response = client.text_detection(image=image)
    texts = response.text_annotations

    nutrients = []
    for text in texts:
        text = text.description
        text = text.strip().split("\n")
        nutrients.append(text)

    return nutrients