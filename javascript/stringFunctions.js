let userName = "Alice";
let message ="Welcome"

function sendMsg(){
    let message = "Welcome" + userName;
    console.log(message);
}
sendMsg() //Always call/initialize the variable in oder to  get return values

function showMessage(){
    userName = "Bob";
    console.log(message,userName)

}
showMessage(); 
console.log(message,userName) 

function sendMsg(from,text){
    from ="Anonymous"
    text ="Welcome to our channel"
    return from + text
}
