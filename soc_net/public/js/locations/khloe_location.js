
var munCenter =  new google.maps.LatLng(47.573370,        
                             -52.735722);  
var villageMall =  new google.maps.LatLng(47.533727,        
                             -52.749993);  
var avalonMall =  new google.maps.LatLng(47.561061,        
                             -52.753122);  
var theRooms =  new google.maps.LatLng(47.565923,        
                            -52.711555);  
var downtown =  new google.maps.LatLng(47.563303,        
                             -52.708291);  
var icongreen= 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
var iconblue= 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
var iconred= 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

var map = null;

window.onload = getMyLocation;

function getMyLocation() {
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(
			displayLocation, 
			displayError);
	}
	else {
		alert("Oops, no geolocation support");
	}
}

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var arr;
	var url0 = "js/listoflocations.json"
		var request0 = new XMLHttpRequest();
		var params0 = "text=stuff";
		request0.onload=function(){
			
			if(request0.status==200){
				
				arr = request0.responseText;
				a= JSON.parse(arr); //
				for(i=0; i<a.length; i++){
					if(a[i].name=="Khloe Ka"){
						a[i].lat = latitude;
						a[i].long= longitude;
						
					}
				}
				var b= JSON.stringify(a);
				
				var url = "js/json/khloeFriends.json"
			    var request = new XMLHttpRequest();
			    var params = "text=stuff";
				request.onload=function(){
					if(request.status==200){
					    addLocations(arr, request.responseText);
						showMap(position.coords, arr, request.responseText);  
					}
				};
				request.open("Get", url);
				request.send(null);
			}
		};
		request0.open("Get", url0);
		request0.send(null);
}


function showMap(coords, arr, text) {
	var googleLatAndLong = new google.maps.LatLng(coords.latitude, 
												  coords.longitude);
	var mapOptions = {
		zoom: 10,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv, mapOptions);

	var b = JSON.parse(arr);         
	var d= JSON.parse(text);
	var title = "Your Location";
	var content = "You are here: " + coords.latitude + ", " + coords.longitude;
	
	for(var i = 0;i<b.length;i++){
	     for(var j=0; j<d.length; j++){
	       if(d[j].name == b[i].name){
	    	    var name = b[i].name;
	    	    var location = b[i].location;
	    	    var locate;
				if(location=="Downtown"){
					locate = downtown;
				}
				else if(location=="The Rooms"){
					locate  = theRooms;
				}
				else if(location=="MUN Center"){
					locate = munCenter;
				}
				else if(location=="Avalon Mall"){
					locate = avalonMall;
				}
			     else if(location=="Village Mall"){
					locate= villageMall;
				}
			     else{
			    	 locate = googleLatAndLong;
			     }
				 addMarker(map, locate, b[i].name+ "'s Location", "You are here: " +locate, iconblue);
	    	    
	       }
	     }
	}
	

}

function addMarker(map, latlong, title, content, icon) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		icon: icon,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);

	var infoWindowOptions = {
		content: content,
		position: latlong
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});
}


function displayError(error) {
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied",
		2: "Position is not available",
		3: "Request timeout"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
}

function addLocations(arr, text ){
	var b = JSON.parse(arr);         
		var d= JSON.parse(text);
		var fri = document.getElementById("loctable");
		for(var i = 0;i<b.length;i++){
		  for(var j=0; j<d.length; j++){
			if(d[j].name == b[i].name){
					var name = b[i].name;
					var location = b[i].location; 
					var tr = document.createElement('tr');
					var td = document.createElement('td');
					var td2= document.createElement('td');
					td.appendChild(document.createTextNode(name));
					td2.appendChild(document.createTextNode(location));
					tr.appendChild(td);
					tr.appendChild(td2);
					fri.appendChild(tr);
		    }
    }
	}
}