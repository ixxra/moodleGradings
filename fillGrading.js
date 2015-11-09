var form = document.getElementById('mform3');
var body = form.getElementsByTagName('tbody')[0];
var rows = body.getElementsByTagName('tr');


var quickgrades = body.querySelectorAll('input.quickgrade');
var emails = body.getElementsByClassName('email');

//Assume grades defined. See grades.js

for (var i=0; i<emails.length; i++){
  var email = emails[i].textContent;
  var grade = grades[email];
  var input =  quickgrades[i];
  input.value = grade;
}
