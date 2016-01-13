/*
This is empty on purpose! Your code to build the resume will go here.
 */
var HTMLheaderName = 'Rahmona Henry'
var formattedName = HTMLheaderName.replace('%data%', HTMLheaderName)

var HTMLheaderRole = 'Web Developer'
var formattedRole = HTMLheaderRole.replace('%data%', HTMLheaderRole)

('#header').prepend(formattedName, formattedRole)

