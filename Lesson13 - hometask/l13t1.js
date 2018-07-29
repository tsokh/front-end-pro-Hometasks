window.onload = function() {


	let inputElems = document.getElementsByTagName('input');
	console.log(inputElems[0].value);
	let textAreaElem = document.querySelector('textarea');
	console.log(textAreaElem);
	setInterval(function(){
		textAreaElem.value = '';
        for(var i = 0; i < inputElems.length; i++){
    		textAreaElem.value += inputElems[i].value + ', ';    
        }
    }, 200);

}