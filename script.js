//your JS code here. If required.
function mapLetters(params) {
	let obj={};
	if(!params || params.lemgth===0) return obj;
	
	for(let index in params){
		const key=params[index];
		obj[key] ? obj[key].push(index) : (obj[key]=[index]);
	}
	return obj;
}

let str=prompt('enter the word or line');
alert(stringify(mapLetters(str)));
