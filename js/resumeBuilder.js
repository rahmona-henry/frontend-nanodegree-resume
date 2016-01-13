/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Rahmona";
var formattedName = HTMLheaderName.replace(%name%, name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace(%role%, role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


 