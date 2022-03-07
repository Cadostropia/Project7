'use strict';

// let array = {
//     "name": `${nameD}`,
//     "surname": `${surnameD}`,
//     "id": `${surnameD}`,
//     "password": `${surnameD}`
// };
// console.log(array);
// fetch(fileName)
// .then(recieve => recieve.json())
// .then(data => data + array)
// .then(data => console.log(data));


// fetch(fileName)
// .then(recieve => recieve.json())
// .then(recieve => recieve[0])
// .then(data => console.log(data));

// changeText()
const fileName='/json/data.json';

fetch(fileName)
.then(recieve => recieve.json())
.then(data => SortBy(data));
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