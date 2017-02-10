--------< ngIf >
teamMembers=null or undefined or length = 0
*ngIf="teamMembers?.length > 0" -> false
-- bad habit
*ngIf="teamMembers != 0"        -> false to check whether data is present but not if lelength = 0

teamMembers.length=1 or more
*ngIf="teamMembers?.length > 0" -> true

--------< ? >

var isOptional = null;
isOptional? false : isOptional -> false
var isOptional = undefined;
isOptional? false : isOptional -> false
var isOptional = false;
isOptional? false : isOptional -> (isOptional->false)
var isOptional = true;
isOptional? false : isOptional -> (isOptional->true)
