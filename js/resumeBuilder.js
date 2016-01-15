/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Rahmona Henry";
var role = "Web Developer";
  
var bio = {
  "name" : "Rahmona Henry",
  "role" : "Web Developer",
  "contact" : {
         "mobile" : "111-111111",
         "email" : "rahmona.henry@icloud.com",
         "github" : "rahmona-henry",
         "location" : "Queenstown, New Zealand"
              },
  "welcomeMsg" : "Welcome to my resume",
  "skills" : ["HTML","CSS","JS","github"],
  "bioPic" : "images/fox.jpg"
};
 
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
 
var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
$("#topContacts").append(formattedLocation);

var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
$("#header").append(formattedMsg);

var formattedSkills = HTMLskills.replace("%data%",bio.skills);
$("#header").append(formattedSkills);

var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBiopic);

//var work = {position,employer,years};