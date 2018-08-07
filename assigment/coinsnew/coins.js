window.onload = function(){
  var button = document.getElementById("btn");
  var output = document.getElementById("demo");
  var amount=document.getElementById("amm");
  var ru10 = document.getElementById("ru10");
  var ru5 = document.getElementById("ru5");
  var ru2 = document.getElementById("ru2");
  var ru1 = document.getElementById("ru1");


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
    if(ru10.checked) coins.push(10); 
    if(ru5.checked) coins.push(5);
    if(ru2.checked) coins.push(2);
    if(ru1.checked) coins.push(1);
    var result = amountTocoins(amount.value, coins);
    output.innerHTML = result;
  }
 
}

