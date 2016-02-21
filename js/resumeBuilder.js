/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Rahmona Henry";
var role = "Web Developer";
var bio = {
  "name": "Rahmona Henry",
  "role": "Web Developer",
  "contact": {
    "mobile": "111-111-111",
    "email": "rahmona.henry@icloud.com",
    "github": "rahmona-henry",
    "location": "Queenstown, New Zealand"
    },
  "welcomeMsg": "Welcome to my resume!",
  "skills": ["HTML", "CSS", "Javascript", "Project Management"],
  "bioPic": "images/fox.jpg"
};
var work = {
  "jobs": [
  {
      "employer": "Loyalty Services Ltd",
      "title": "Project Manager",
      "location" : "Auckland",
      "dates": "2011-to date",
      "description": " Agreeing, implementing and delivering project objectives with clients,\
      our team of developers and contractors."
    },

    {
      "employer": "The Winery",
      "title": "Marketing & Event Manager",
      "location": "Queenstown",
      "dates": "2009-2011",
      "description":" Working closely with senior management to execute the domestic marketing plan."
    }

  ]
};

var projects = {
  "projects": [
    {
"title": "Resume Builder",
"dates": " January 2016",
"description": "Using the Udacity JavaScript basics course I created my resume using JS,HTML & CSS.",
//"images": "images/udacity.jpg"
   },

  {
"title": "Build a Calculator",
"dates": "January 2016",
"description": "Using a Code Academy course I built a basic calculator using JS,HTML & CSS.",
//"images" :"images/codeacademy.png"
   }

]
};

var education = {
    "schools" : [
    {
      "name" : "University College Galway",
      "location" : "Galway,Ireland",
      "years" : "1999-2003",
      "degree" : "B.Sc in IT & Business"
    },

    {
      "name" : "St Josephs College Summerhill",
      "location" : "Athlone,Ireland",
      "years" : "1993-1999",
      "degree" : "Honours Leaving Cert"
    }
  ],

  "onlineCourses" : [
  {
    "title": "JavaScript Syntax",
    "school": "Udacity",
    "dates": "Jan 2016",
    "url": "https://www.udacity.com"
  },

    {
    "title": "JavaScript Basics",
    "school": "Code Academy",
    "dates": "Nov 2016",
    "url": "https://www.codeacademy.com"
  }

 ]
};


var formattedRole = HTMLheaderRole.replace("%data%",role);
var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedRole, formattedName);

var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
$("#header").append(formattedBiopic, formattedMsg);


var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation );

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
 
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);

};

function displayWork () {
for (job in work.jobs) {
  //Create new div for work experience
$("#workExperience").append(HTMLworkStart);
//Concatonate employer and title
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
var formattedWorkLocation =HTMLworkLocation.replace("%data%",work.jobs[job].location);
$(".work-entry:last").append(formattedEmployerTitle);
$(".work-entry:last").append(formattedWorkLocation);

var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedDates);
$(".work-entry:last").append(formattedDescription);

}
}
displayWork();


//Display education function
function displayEducation () {
for (school in education.schools) {
$("#education").append(HTMLschoolStart);  

var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
var formattedLocation =  HTMLschoolLocation.replace("%data%",education.schools[school].location);
var formattedYear =  HTMLschoolDates.replace("%data%",education.schools[school].years);
var formattedDegree =  HTMLschoolDegree.replace("%data%",education.schools[school].degree);

$(".education-entry:last").append(formattedName);
$(".eduaction-entry:last").append(formattedLocation);
$(".education-entry:last").append(formattedYear);
$(".education-entry:last").append(formattedDegree);

}
}

displayEducation();

//Display online courses
$(".education-entry:last").append(HTMLonlineClasses);
for (course in education.onlineCourses) {


var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
var formattedUrl =  HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

$(".education-entry:last").append(formattedTitle);
$(".education-entry:last").append(formattedSchool);
$(".education-entry:last").append(formattedDates);
$(".education-entry:last").append(formattedUrl);

};
projects.display = function () {
for (project in projects.projects) {
$("#projects").append(HTMLprojectStart);

var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
}

};

projects.display();




//function locationizer(work_obj){
//var locationArray =[];
//for (job in work_obj.jobs){
  //var newLocation = work_obj.jobs[job].location;
  //locationArray.push(newLocation);
//}

//return locationArray;
//}
//console.log(locationizer(work));




function inName(name) {
name = name.trim().split(" ");
console.log(name);
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
return name[0]+ " "+name[1];
}

$("#main").append(internationalizeButton);



//Google Map
$("#mapDiv").append(googleMap);