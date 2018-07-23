window.onload=function(){
	var field=document.getElementById('field');
    var sumbit=document.getElementById('sumbit');
	var msgs=document.getElementById('msg');

	var parseText=function(text){
		var finalText=text.replace(/http[s]?\:\/\/[a-zA-Z0-9]+\.[a-z0-9]{2,3}/ig,function($1){
			return "<a href='"+$1+"'target='_blank'>"+$1+"</a>"

		});
		return finalText;
	}
	sumbit.onclick=function(){
		var text=field.value;
		var el=document.createElement("p");
		el.innerHTML=parseText(text);
		el.setAttribute('class','msg');
		msgs.appendChild(el);
		field.value="";
	}
}