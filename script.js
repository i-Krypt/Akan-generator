// validate
function verify(){
  var date = document.getElementById('Date').value;
  var month = document.getElementById('Month').value;
  var yearOfBirth = document.getElementById('Year').value;

  if(date===""||date<1||date>31){
    alert("Date must be between 1 and 31");
  }
  else if(month===""||month<1||month>12){
    alert("Date must be between 1 and 12");
  }
  else if(yearOfBirth===""){
    alert("You must enter a value year");
  }
  else{
    return false;
  }
}




function getName() {
  var date = document.getElementById('Date').value;

  var month = document.getElementById('Month').value;

  var yearOfBirth = document.getElementById('Year').value;


  var century = yearOfBirth.slice(0, 2);
  var year = yearOfBirth.slice(2, 4);

  var genders = document.getElementById("Gender");
  var gender = genders.options[genders.selectedIndex].text;

  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];

  var dayOfBirth = parseInt((((century / 4) - 2 * year - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7);
  // var dayOfBirth = Math.floor(dayOfBirth);

  if (gender === "Male") {
    document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1] + " and your name is " + maleName[dayOfBirth - 1];
  }
  else if (gender === "Female") {
    document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1] + " and your name is " + femaleName[dayOfBirth - 1];
  }

}