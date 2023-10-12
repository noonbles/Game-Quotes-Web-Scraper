import requests

def grabQuotes():
    x = requests.get("https://zenquotes.io/api/quotes")
    return x.json()
    
arr = []
for i in range(10):
    arr.append(grabQuotes())

f = open("gimme.txt", "w")

for a in arr:
    for obj in a:
        f.write(obj["q"] + '\n')

f.close()


