--------< ngIf >
teamMembers=null or undefined or length = 0
*ngIf="teamMembers?.length > 0" -> false
-- bad habit
*ngIf="teamMembers != 0"        -> false to check whether data is present but not if lelength = 0

teamMembers.length=1 or more
*ngIf="teamMembers?.length > 0" -> true

--------< ? >

var myVal = null or undefined or NaN or ''
myVal? 1 : 2    -----> 2
var myVal = false or true
myVal? 1 : 2    -----> 1
