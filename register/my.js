window.onload=function(){

var button=document.getElementById("btn");
var fname=document.getElementById("fusername");
var lname=document.getElementById("lusername");
var email=document.getElementById("mail");



var isValid = function() {


          var errFnameRef=document.getElementById("fname-err-js");
          var errLnameRef=document.getElementById("lname-err-js");
           var errEmailRef=document.getElementById("email-err-js");
           var match=email.value.match(/[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/g);

	 	
	 
            if(!fname.value)
			{

			errFnameRef.innerHTML="enter valid fname";
			return false;

			}
			else if(!lname.value)
			{
			errFnameRef.innerHTML="";
			errLnameRef.innerHTML="enter valid lname";
			return false;

			}

		
	      else if(!match)
			{
             errFnameRef.innerHTML=errLnameRef.innerHTML="";
			errEmailRef.innerHTML="enter valid email";
			return false;

			}
			else{
			errFnameRef.innerHTML=errLnameRef.innerHTML=errEmailRef.innerHTML="";
			return true;
			}


}


         button.onclick=function(){
		if(isValid())
		alert("Register successfully");
	     }

}