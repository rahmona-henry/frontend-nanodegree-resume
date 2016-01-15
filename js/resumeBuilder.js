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
 

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));
$("#header").append(formattedWelcomeMsg);

var formattedSkills = HTMLskills.replace("%data%",bio.skills);
$("#header").append(formattedSkills);

var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBiopic);

//var work = {position,employer,years};