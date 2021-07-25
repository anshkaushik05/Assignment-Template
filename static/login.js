// var value="sign up"
document.getElementsByClassName("logo_img")[0].addEventListener("click",go_index)
function go_index(){
  location.href="/";
}

if(document.cookie===""){
  document.getElementsByClassName("add_btn")[0].addEventListener("click",addCookie);
  document.getElementsByClassName("foot_btn")[0].style.display="none";
}
else{

  location.href="/details";
}
// else{
  // location.href="/details";
  // login();
  // document.getElementsByClassName("add_btn")[0].addEventListener("click",verify);
// }
function addCookie(){
var username=document.getElementsByClassName("textbox")[0].value;
var clgname=document.getElementsByClassName("textbox")[1].value;
var password=document.getElementsByClassName("textbox")[2].value;
var Cookie="username:"+username+ ",clgname:"+ clgname+",password:"+password+";";
  document.cookie=Cookie;
  console.log(document.cookie);
  login();
}
function login(){
  // value="sign in";
  document.getElementsByClassName("add_btn")[0].innerHTML="Signed in";
  document.getElementsByClassName("textbox")[1].style.display="none";
  location.href="/details";
  //  document.getElementsByClassName("textbox")[0].value="";
// var clgname=document.getElementsByClassName("textbox")[1].value;
  // document.getElementsByClassName("textbox")[2].value="";
}

// function verify(){
//   var username=document.getElementsByClassName("textbox")[0].value;
// // var clgname=document.getElementsByClassName("textbox")[1].value;
// var password=document.getElementsByClassName("textbox")[2].value;
// console.log(username,password);
// if((username===document.cookie.username)&&(password===document.cookie.password)){
//   location.href="/details";
// }
// else{
//   document.getElementsByClassName("ifwrong")[0].style.display="inline-block";
// }
// }


