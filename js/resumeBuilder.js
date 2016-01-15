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

var education = {
    "schools" : [
    {
      "name" : "University College Galway",
      "city" : "Galway,Ireland",
      "years" : "1999-2003",
      "degree" : "B.Sc in IT & Business"
    },

    {
      "name" : "St Josephs College Summerhill",
      "city" : "Athlone,Ireland",
      "years" : "1993-1999",
      "Certificate" : "Honours Leaving Cert"
    }
  ],

  "onlineCourses" : [
  {
    "title": "JavaScript Syntax",
    "school": "Udacity",
    "dates": 2016,
    "url": "http://www.udacity.com/course/ud804"
  }
 ]
}

var work = {
  "jobs" : [
  {
  "employer" : "Loyalty Services Ltd",
  "title" : "Project Manager",
  "location" : "Auckland",
  "dates" : "2011-to date",
  "description" : "blah,blah,blah"
  },

  {
  "employer" : "The Winery",
  "title" : "Marketing & Event Manager",
  "location" : "Queenstown",
  "dates" : "2009-2011",
  "description" : "blah,blah,blah"
  }
 ]
};









var projects = {
  "projects" : [
    {
"title": "Sample Project",
"dates": "xxxx",
"description": "xxxxxxxxxx"
   }
]
}


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

var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBiopic);



if (bio.skills.length >0) {
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
  $("header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);

}

function displayWork () {
for (job in work.jobs) {
$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;

$(".work-entry:last").append(formattedEmployerTitle);

var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
$("work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$("work-entry:last").append(formattedDescription);

}
}

displayWork();
//var formattedPosition = HTMLworkTitle.replace("%data%",work.position);
//$("#main").append(formattedPosition);

//var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
//$("#main").append(formattedEmployer);

//var formattedYears = HTMLworkDates.replace("%data%",work.years);
//$("#main").append(formattedYears);

//var formattedCity = HTMLworkLocation.replace("%data%",work.city);
//$("#main").append(formattedCity);

//var formattedName = HTMLschoolName.replace("%data%",education.name);
//$("#main").append(formattedName);

//var formattedYears = HTMLschoolDates.replace("%data%",education.years);
//$("#main").append(formattedYears);

//var formattedCity = HTMLschoolLocation.replace("%data%",education.city);
//$("#main").append(formattedCity);