window.onload=function(){
    var button=document.getElementById("btn");
    button.onclick=function(){
      var day= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
      
      var date= new Date(document.getElementById("date").value);
     
      var n= date.getDay();
     
      document.getElementById("demo").innerHTML=day[n];

    }
}    