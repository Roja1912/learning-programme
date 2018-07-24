window.onload=function(){
    var n=document.getElementById("num");
    var button=document.getElementById("btn");
    var msg1=document.getElementById("msg1"); 
     var msg2=document.getElementById("msg2");
     var msg3=document.getElementById("msg3");
    button.onclick=function(){
      var i,j,flag=0;
      console.log(msg1);
      var c=n.value;
           c--;
     for(i=c;i<n.value;i--){
            flag=0;
       for(j=1;j<=i;j++){
        
             if(i%j==0){
                 flag++;
             }
            
        } 
            if(flag==2){
              msg1.innerHTML=i+" is a left side prime number";
              break;
            }
      }
    var b=n.value;
       b++;
 for(i=b;i>n.value;i++){
        flag=0;
   for(j=1;j<=i;j++){
    
         if(i%j==0){
             flag++;
         }
        
    } 
        if(flag==2){
           msg2.innerHTML=i+" is a right side prime number";
          break; 
         }
     }
       
      var d=n.value;
        flag=0;
    for(j=1;j<=d;j++){
          if(d%j==0){
              flag++;
          }
     } 
         if(flag==2){
             msg3.innerHTML=d+"   is a prime number";
         }else{
             msg3.innerHTML= d+"   is not a prime number";
         }
    
      
  } 
}
