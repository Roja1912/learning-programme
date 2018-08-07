window.onload = function(){
  var button = document.getElementById("btn");
  var output = document.getElementById("demo");
  var amount=document.getElementById("demo2");
  var r10 = document.getElementById("r10");
  var r5 = document.getElementById("r5");
  var r2 = document.getElementById("r2");
  var r1 = document.getElementById("r1");


  var amountTocoins = function(amount, coins) 
    {
     if (amount === 0) 
      {
         return [];
       } 
     else
       {
         if (amount >= coins[0]) 
           {
            left = (amount - coins[0]);
            return [coins[0]].concat( amountTocoins(left, coins) );
            } 
          else
            {
             coins.shift();
             return   (amount, coins);
            }
        }
    } 
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));
  button.onclick = function() {
    var coins = [];
    if(r10.checked) coins.push(10); 
    if(r5.checked) coins.push(5);
    if(r2.checked) coins.push(2);
    if(r1.checked) coins.push(1);
    var result = amountTocoins(amount.value, coins);
    output.innerHTML = result;
  }
 
}

