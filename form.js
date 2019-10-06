//Mitchell Desjardins
//Assignment: The Weakest Link
//Date: April 10 2019

const startButton = document.querySelector("#start");
startButton.addEventListener("mouseover", function(){

  let inputFirstName = document.querySelector("#inputFName").value;
  localStorage.setItem("Fname", inputFirstName);

  let inputLastName = document.querySelector("#inputLName").value;
  localStorage.setItem("Lname", inputLastName);

  let input_Age =document.querySelector("#inputAge").value;
  localStorage.setItem("Age", input_Age);

  let input_Male = document.querySelector("#inputMale");
  let input_Female = document.querySelector("#inputFemale");

  if (input_Male.checked){
    localStorage.setItem("Sex", "Male");
  }
  else if (input_Female.checked){
    localStorage.setItem("Sex", "Female");
  }
});