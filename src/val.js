const form = document.getElementById("form");
const name = document.getElementById("name");
const phone = document.getElementById ("phone" );
const message = document.getElementById ("message");
const email = document.getElementById("email");
form.addEventListener ("submit", (e) =>{
e.preventDefault();
if (form.checkValidity())
alert ("Registered");
form.classList.add("was-validated");
});