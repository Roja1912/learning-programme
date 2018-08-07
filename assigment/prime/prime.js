window.onload=function(){
	var num=document.getElementById("number");
	var button=document.getElementById("but");
	var flag=0;
	
	button.onclick=function(){

    var left=document.getElementById("demo");
    var right=document.getElementById("demo1");
    var middle=document.getElementById("demo2");
		var n=parseInt(num.value);
		var m=parseInt(num.value);
    var k=parseInt(num.value);
	  


		n=n+1;
    console.log(n);
    
		for(var j=n;j>3;j++)
		{
      console.log(j);
	
             for(var i=2; i<j;i++)
              {
                  // condition for nonprime number
                  if(j%i==0)
                  {
                    flag++;
                     break;
                  } 
                  else{
                    flag=0
                  }  
              }

                if (flag==0){
                left.innerHTML=j;
                break;
              }
		}
		


		m=m-1;
    console.log(m);
        for(var j=m;j>3;j--)
        {

             for(var i=2; i<j; i++)
              {
                  // condition for nonprime number
                  if(j%i==0)
                  {
                    flag++;
                     break;
                  }   
                  else{
                    flag=0;
                  }
              }

                if (flag==0){
                right.innerHTML=j;
                break;
            }
        }

           console.log(n);
         for(var i=2; i<k; i++)
              {
                  // condition for nonprime number
                  if(k%i==0)
                  {
                    flag++;
                     break;
                  }   
                  else{
                    flag=0;
                  }
              }

                if (flag==0){
                  middle.innerHTML="prime numner";


               
  }




      	
	}

}