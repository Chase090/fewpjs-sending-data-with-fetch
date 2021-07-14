// Add your code here
// fetch(destinationURL, configurationObject);

const { restore } = require("chai-spies");

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// const configurationObject = { 
    // method: "POST",
    // headers: {
        // "Content-Type": "application/json",
        // * what type of data we are sending
        // "Accept": "application/json"
        // * what type of data we want to recieve
//     },
//     body: JSON.stringify(formData)
// };

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       }); 

// write a function that user and email
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(resp => resp.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(error => document.body.innerHTML = error.message)

}
