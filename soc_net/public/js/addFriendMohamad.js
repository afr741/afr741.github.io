window.onload = function(){


var url = "js/json/mohamadFriends.json"
var request = new XMLHttpRequest();
var params = "text=stuff";

request.onload=function(){
	
	if(request.status==200){
		addFriends(request.responseText);
		dFriends(request.responseText);
		
	}
	
};
request.open("Get", url);
request.send(null);


}

function addFriends( text){
	var a = text;
	var b = JSON.parse(a);
	var fri = document.getElementById("s2");
	
	
	for(var i = 0;i<b.length;i++){
		if(b[i].name== "Mohamad Hamadi"){
			console.log("skipped same person");
		}
		else{
		var name = b[i].name;
		var entry = document.createElement('li');
		entry.appendChild(document.createTextNode(name));
		fri.appendChild(entry);
	}	
}
}


function dFriends(text){
	var a = text;
	var b = JSON.parse(a);
	var fri = document.getElementById("friendDelete");
	
	
	for(var i = 0;i<b.length;i++){
		if(b[i].name== "Mohamad Hamadi"){
			console.log("skipped same person");
		}
		else{
		var name = b[i].name;
		var entry = document.createElement('option');
		entry.appendChild(document.createTextNode(name));
		fri.appendChild(entry);
	}	
}
}