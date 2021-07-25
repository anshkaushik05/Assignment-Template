document.getElementsByClassName("logo_img")[0].addEventListener("click",go_index)
function go_index(){
  location.href="/";
}

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
var i=0;
var j=0;
document.getElementsByClassName("add_btn")[0].addEventListener("click",addtextbox);
function addtextbox(){
   i++;
  let node= document.createElement("textarea");
  node.classList ="textbox";
  node.placeholder="Paste/write here";
  node.name=`body${i}`;
  node.classList.add("data");
   document.getElementsByClassName("bodyform")[0].appendChild(node);
}


document.getElementsByClassName("add_btn")[2].addEventListener("click",next_btn);
async function next_btn(){
   var arr=[];
    for(var x=0;x<=i+j;x++){
        arr.push(document.getElementsByClassName("data")[x].value);
    }
    var data
    axios({
      method: 'post',
      url: '/assignment',
      data: arr
    })
   .then((render)=>{
      // console.log(data);
      // if (response.data.redirect) {
        window.location.replace('/assignmentready');
      // }
    })
      .catch(function (error) {
        console.log(error);
      });

   // await document.getElementById("numi").setAttribute("value",i);
   // document.getElementsByClassName("submit_btn")[0].click();

}