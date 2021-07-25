var divArray = document.getElementsByClassName("box");
var textsize=2.5,textcolor,bgcolor,textfont="'Courier New', Courier, monospace";
let node= document.createElement("input");
node.type="file";
node.classList ="myimage";
node.classList.add("data");
node.accept="image/png, image/jpeg";
node.id="imgsrc0";
var j=0;
for (var i=0; i<divArray.length; i++){
    // var answer=document.getElementsByClassName("nouse")[0];
    divArray[i].onclick =  function(){
            
            var answer=this;
            var timer=0;
            
                document.getElementsByClassName("stylebox")[0].style.display="inline-block";
                function fetch() {
                    textsize = document.getElementById("textsize").value;
                    textcolor = document.getElementById("textcolor").value;
                    textfont = document.getElementById("textfont").value;
                    bgcolor = document.getElementById("bgcolor").value;
                    answer.style.fontSize = textsize+"vw";
                    answer.style.color = textcolor;
                    answer.style.fontFamily = textfont;
                    answer.style.background = bgcolor;
                }
                timer=setInterval(() => {
                    fetch();
                }, 100);
                
                document.getElementsByClassName("addbtn")[1].addEventListener("click",change);
             function change(){
            document.getElementsByClassName("stylebox")[0].style.display="none";
            answer=document.getElementsByClassName("nouse")[0];
            }
    
                document.getElementsByClassName("addbtn")[0].addEventListener("click",addfile);
               function addfile(){
                    
                    answer.appendChild(node);
                        document.getElementsByClassName("myimage")[0].click();

                    function previewImages() {

                        var preview = document.querySelector("#imgsrc0");
                        
                        if (this.files) {
                          [].forEach.call(this.files, readAndPreview);
                        }
                        
                        function readAndPreview(file) {
                        
                          if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
                            return alert(file.name + " is not an image");
                          }
                          var reader = new FileReader();
                          reader.addEventListener("load", function() {
                                var image = new Image();
                                // image.height = 100;
                                image.classList="reqimg";
                                image.title  = file.name;
                                image.src    = this.result;
                                image.style.padding="0 0 0 8.5vw";
                                image.id =`img${j}`;
                                        answer.appendChild(image);
                          });
                          reader.readAsDataURL(file);
                        }
                    }
                    document.querySelector("#imgsrc0").addEventListener("change", previewImages);
                    document.getElementsByClassName("stylebox")[0].style.display="none";

                    function change(){
                        answer=document.getElementsByClassName("nouse")[0];
                    }
                    j++;
                    setTimeout(() => {
                       
                        document.getElementsByClassName("addbtn")[1].click();

                    }, 5000);
                }
  
      }
    }

    document.getElementsByClassName("printfile")[0].addEventListener("click",printfile)
    function printfile(){
        document.getElementsByClassName("printfile")[0].style.display="none";
        window.print();
        document.getElementsByClassName("printfile")[0].style.display="inline-block";
    }
