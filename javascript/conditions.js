pass_mark=0;
const gpa = 65;
const exp =70;
const avg =60;
const dist=88;
const fail=49;


if(gpa >= exp){
    console.log("You passed with:" + gpa )
}else if(gpa === avg){ 
    console.log("Your avg is" + gpa); 
} 
else if( gpa >= dist){
    console.log("you got a dist" + dist)
}
else if( gpa == fail){
    console.log("you failed" + fail)
}
