'use strict';
// document.getElementById("showScreen").innerHTML = ``;

// fetch('/json/data.json')
// .then(recieve => recieve.json())
// .then(recieve => recieve[0])
// .then(data => console.log("First attempt "+data));

// fetch('/json/data.json')
// .then(recieve => recieve.json())
// .then(data => console.log("Second attempt "+data));
const fileName = '/json/data.json';

fetch(fileName)
.then(recieve => recieve.json())
.then(data => SortBy(data));

function submitData(variable){
    let nameD, surnameD, idD, passwordD = "";
    let array ;
    nameD = document.getElementById("name").innerHTML;
    surnameD = document.getElementById("name").innerHTML;
    idD = document.getElementById("name").innerHTML;
    passwordD = document.getElementById("name").innerHTML;
    array = {
        "name": `${nameD}`,
        "surname": `${surnameD}`,
        "id": `${surnameD}`,
        "password": `${surnameD}`
    };
    let formData = new formData();
    formData.append("array", array);
    fetch('/json/data.json',{ method: "post", body:array})

}
// changeText()
function SortBy(data){
    document.getElementById("showScreen").innerHTML=``;
    for (let i = 0; i< data.length; i++) {
        document.getElementById("showScreen").innerHTML = 
        document.getElementById("showScreen").innerHTML +
        `name: ${data[i].name} <br> 
        surname: ${data[i].surname} <br>
        id: ${data[i].id} <br>
        password: ${data[i].password} <br>`       
        +`<br>` 
    }
}