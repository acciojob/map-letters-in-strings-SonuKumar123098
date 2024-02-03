//your JS code here. If required.
function mapLetters(params) {
	let obj={};
	if(!params || params.lemgth===0) return obj;
	
	for(let index in params){
		obj[params[index]] ? obj[params[index]].push(index) : (obj.params[index]=[index]);
	}
	return obj;
}

// let str=prompt('enter the word or line');
// alert(obj.stringigy(mapLetters(str)));
