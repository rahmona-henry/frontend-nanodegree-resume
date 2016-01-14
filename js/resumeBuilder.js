/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Rahmona Henry"
var role = "Web Developer"

var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedRole);
  
var bio = {
  "name" : "Rahmona Henry",
  "role" : "Web Developer"
  "contacts" : {
  "mobile" : "111-111111",
  "email" : "rahmona.henry@icloud.com",
  "github" : "rahmona-henry",
  "location" : "Queenstown, New Zealand"
  },
  "welcomeMsg" : "Welcome to my resume",
  "skills" : ["HTML","CSS","JS","github"],
  "bioPic" : "images/fox.jpg"
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.mobile);
$("#main").append(bio.email);
$("#main").append(bio.github);
$("#main").append(bio.location);
$("#main").append(bio.welcomeMsg);
$("#main").append(bio.skills);
$("#main").append(bio.bioPic);

//var work = {position,employer,years};