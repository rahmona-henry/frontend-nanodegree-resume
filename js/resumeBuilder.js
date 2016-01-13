/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Rahmona Henry";
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


 var bio = {
   "name" : " Rahmona Henry ",
   "role" : " Web Developer ",
   "contacts": {
   "mobile" : " 111-111111 ",
   "email" : " rahmona.henry@icloud.com ",
   "github" : "rahmona-henry",
   "location" : "Queenstown New Zealand"
 },

 "welcomeMessage" : "Welcome to my resume. ",
 "skills" : [
   "Github", "HTML", "CSS", "JS"
 ],

 "biopic": "images/fox.jpg"
 };

var education = {

 education["name"]: "University College Galway";
 education["location"]: "Ireland";
 education["degree":] "Bsc.IT & Bus";
 education["years":] "1999-2003";
},
var work = {
 
   work.position : "Project Manager";
   work.employer : "Loyalty Services Ltd ";
   work.years : " 4 years ";
 }, 

  
$("#main").append(work["position"]);
$("#main").append(eduaction.name);



 if (bio.name.length) {

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $("#topContacts").append(formattedMobile);

   var formattedEmail =HTMLemail.replace("%data%", bio.contacts.email);
   $("#topContacts").append(formattedEmail);

   var formattedLocation =HTMLlocation.replace("%data%", bio.contacts.location);
   $("#topContacts").append(formattedLocation);

   var formattedMsg =HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedMsg);

   var formattedPic =HTMLbioPic.replace("%data%", bio.biopic);
   $("#header").append(formattedPic);
};

if (bio.skills.length) {

   $("#header").append(HTMLskillsStart);

   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);
 };

