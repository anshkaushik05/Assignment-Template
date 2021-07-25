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
  document.getElementsByClassName("personal_text_box")[1].value=Username
  document.getElementsByClassName("personal_text_box")[2].value=Clgname;
  document.getElementsByClassName("nav_btn")[0].innerHTML=`<a >${Username}</a>`;

  document.getElementsByClassName("foot_btn")[0].innerHTML=`<a >Sign Out</a>`;

    document.getElementsByClassName("foot_btn")[0].addEventListener("click",logout_index)
    function logout_index(){
      document.cookie="";
      location.href="/";
    }
}

var i=0;
document.getElementsByClassName("add_btn")[0].addEventListener("click",addtextbox);
function addtextbox(){
    i++;
   var node= document.createElement("textarea");
   node.classList ="textbox";
   node.placeholder="Paste/write here  (More Description)";
   node.name=`desc${i}`;
    document.getElementsByClassName("desc")[0].appendChild(node);
}

document.getElementsByClassName("add_btn")[1].addEventListener("click",submitform);
function  submitform(){
    var arr=[];
    for(var x=0;x<=i;x++){
        arr.push(document.getElementsByClassName("textbox")[x].value);
    }
    // await document.getElementById("arri").setAttribute("value",arr[]);
    name_all=document.getElementsByClassName("personal_text_box");
    const data = { 
                  project_name: name_all[0].value,
                   full_name:  name_all[1].value ,
                   clg_name:  name_all[2].value,
                   i:i,
                   desc:arr           
  };
  // data_str=JSON.stringify(data);
//POST request with body equal on data in JSON format
// axios.post('/details',data)
//   .then(()=>{
//   console.log(data);
//   if (response.data.value) {
//     window.location.replace('/');
//   }
// })
//   .catch(function (error) {
//     console.log(error);
//   });
axios({
  method: 'post',
  url: '/details',
  data: data
}).then((response)=>{
  // console.log(data);
  // if (response.data.redirect) {
    window.location.replace('/assignment');
  // }
})
  .catch(function (error) {
    console.log(error);
  });
  
// fetch('/details', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
//   // body:data
// })
// .then((response) => response.json())
// //Then with the data from the response in JSON...
// .then((data) => {
//   console.log('Success:', data);
// })
// //Then with the error genereted...
// .catch((error) => {
//   console.error('Error:', error);
// });

    // document.getElementById("numi").setAttribute("value",i);
    // document.getElementsByClassName("submit_btn")[0].click();
}