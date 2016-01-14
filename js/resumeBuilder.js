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
 

var formattedContacts = HTMLcontactGeneric.replace("%data%",contacts);
$("#main").append(bio.contacts);

var formattedMobile = HTMLmobile.replace("%data%",mobile);
$("#main").append(bio.mobile);

var formattedEmail = HTMLemail.replace("%data%",email);
$("#main").append(bio.email);

var formattedGithub = HTMLgithub.replace("%data%",github);
$("#main").append(bio.github);

var formattedLocation = HTMLlocation.replace("%data%",location);
$("#main").append(bio.location);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",welcomeMsg);
$("#main").append(bio.welcomeMsg);

var formattedSkills = HTMLskills.replace("%data%",skills);
$("#main").append(bio.skills);

var formattedBiopic = HTMLbioPic.replace("%data%",bioPic);
$("#main").append(bio.bioPic);

//var work = {position,employer,years};