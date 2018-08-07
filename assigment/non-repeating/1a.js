function repeated(){
   var str = document.getElementById("vi").value;
   
   for(var i=0;i<str.length;i++){
       if(str.indexOf(str.charAt(i))==str.lastIndexOf(str.charAt(i))){
           document.getElementById("output").innerHTML = str.charAt(i);
           break;
       } 
   }
}

