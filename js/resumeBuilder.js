/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Rahmona Henry"
var role = "Web Developer"

var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedRole);
  