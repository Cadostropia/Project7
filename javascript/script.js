'use strict';
document.getElementById("showScreen").innerHTML =`Waiting for Data ...`;

fetch('/json/data.json')
.then(data => console.log("First attempt "+data));

fetch('/json/data.json')
.then(recieve => recieve.json())
.then(data => console.log("Second attempt"+data));

fetch('/json/data.json')
.then(recieve => recieve.json())
.then(data => data[0])
.then(data => console.log("Second attempt"+data));