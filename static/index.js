if(document.cookie!=""){
    var Username="";
    var Clgname="";
    var j=0;
    for(var i=0;;i++){
      if(j==0){
        if(i==0)
          i=i+9;
        if(document.cookie[i]==',')
          j++;
        else
          Username+=document.cookie[i];
        continue;
      }
      else if(j==1){
        if(document.cookie[i-1]==',')
          i+=8;
        if(document.cookie[i]==',')
          j++;
        else
          Clgname+=document.cookie[i];
        continue;
      }
      break;
  
    }
    // document.getElementsByClassName("personal_text_box")[1].value=Username
    // document.getElementsByClassName("personal_text_box")[2].value=Clgname;
    document.getElementsByClassName("nav_btn")[0].innerHTML=`<a >${Username}</a>`;
    document.getElementsByClassName("foot_btn")[0].innerHTML=`<a >Sign Out</a>`;

    document.getElementsByClassName("foot_btn")[0].addEventListener("click",logout_index)
    function logout_index(){
      document.cookie="";
      location.href="/";
    }
  }
document.getElementsByClassName("logo_img")[0].addEventListener("click",go_index)
function go_index(){
  location.href="/";
}