function ChangeName() {
  let name = prompt('What is your name?');
  document.getElementById("inputName").innerHTML = `Hello ${name}`;
}



/*function ChangeName() {
  let text;
let person = prompt("Please enter your name:", "");
if (person == null || person == "") {
  text = "Hello";
  console.log("User cancelled prompt");
} else {
  text =  "Hello   " + person ;
  console.log("User wrote name");
}
document.getElementById("inputName").innerHTML = text;
} */