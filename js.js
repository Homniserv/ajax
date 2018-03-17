(
//https://www.w3schools.com/js/js_function_definition.asp
function () {
 function loadDoc() {
  // var xmlhttp = new XMLHttpRequest();
   var xmlhttp;
  
  if (window.XMLHttpRequest) {
   
    xmlhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
  
  
 
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "ajax_info.txt", true);
  xmlhttp.send();
  
  
  
  
  
  
}
    
    
    
}
)();


