
window.onload= function() {
var stack = [];
var word=document.getElementById("bal");
var button=document.getElementById("btn");
var output=document.getElementById("test");

function checkParentheses(word) {
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (var i = 0; i < word.length; i++) {
    if (word[i] === '(' || word[i] === '[' || word[i] === '{') {
      stack.push(word[i]);
    } else {
      var last = stack.pop();

      if (word[i] !== map[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}
button.onclick = function() {

  var result=checkParentheses(word.value)
   output.innerHTML=result;

  if (checkParentheses(result === true)) {
    alert('success');
  }
  else  {
    alert('unsuccessful');
  }
}

}
