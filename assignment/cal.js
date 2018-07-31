window.onload=function(){

 	var input1 = document.getElementById("input1");
	var input2 = document.getElementById("input2");
	var and = document.getElementById("and");
	var or = document.getElementById("or");
	var not = document.getElementById("not");
	var output = document.getElementById("output");

	and.addEventListener("click", function(){
		var result = (input1.value & input2.value);
		output.innerHTML = result;
	});


	or.addEventListener("click", function(){
		var result = (input1.value | input2.value);
		output.innerHTML = result;
	});

	not.addEventListener("click", function(){
		var result = !(input1.value);
		output.innerHTML = result;
	});

}
