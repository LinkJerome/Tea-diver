import serial
import requests
import json

def getTeaTemperatures():
    teasData = {}

    response = requests.get('https://tea-api-vic-lo.herokuapp.com/tea')

    obj = json.loads(response.text)

    for tea in obj:
        name = tea['name']
        newTea = {
            'temperature': tea['temperature'],
            'brew_time': tea['brew_time'],
        }
        teasData[name] = newTea

    return teasData





# ser = serial.Serial('/dev/tty.usbserial', 9600)
# ser.write(b'5')

print(getTeaTemperatures())
