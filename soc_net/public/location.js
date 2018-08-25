
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
var map;

var icongreen= 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
var iconblue= 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
var iconred= 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

window.onload =  displayLocation;

function displayLocation(position) {  

  
  var button = document.getElementById("submit");
	button.onclick = changeLoc;

	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if (key.substring(0, 5) == "abcdf") {
			var value = localStorage.getItem(key);
      changeLoc1(value);
		
		}
	}
   showMap(munCenter); 
}

function showMap(coords) {  

  
  var mapOptions = {      
    zoom: 10,       
    center: coords, 
    mapTypeId: google.maps.MapTypeId.ROaDMaP  
  };    
  var mapDiv = document.getElementById("map");  
  map = new google.maps.Map(mapDiv, mapOptions); 
  
  var title = "Mohamad's Location"; 
  var title2 = "Miley's Location"; 
  var title3= "Jake's Location"; 
  var content = "You are here: " + coords.latitude + ", " + coords.longitude; 
  var cc;
  if(document.getElementById("loc1").textContent== "Downtown" ){
     locate= downtown;
  }
   else if(document.getElementById("loc1").textContent== "The Rooms" ){
     locate= theRooms;
  }
    else if(document.getElementById("loc1").textContent== "Avalon Mall" ){
     locate= avalonMall;
  }
      else if(document.getElementById("loc1").textContent== "MUN Center" ){
     locate= munCenter;
  }
   else {
   locate= villageMall;
  }
    addMarker(map, locate, title, "Your are at " + document.getElementById("loc1").textContent , icongreen); 
    addMarker(map, avalonMall, title3, "Your are at " + document.getElementById("loc2").textContent, iconblue); 
    addMarker(map, theRooms, title2,"Your are at " + document.getElementById("loc3").textContent, iconred); 
}
////

/////
function addMarker(map, latlong, title, content, icon) {  
  var markerOptions = {     
    position: latlong,    
    map: map,
    title: title,   
    clickable: true,  
    icon: icon
  };    
  var marker = new google.maps.Marker(markerOptions); 
  var infoWindowOptions = {
    content: content,    
    position: latlong    };  
  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  
    google.maps.event.addListener(marker, "click", function() {    
      infoWindow.open(map); 
    });
}

// ////////////

function changeLoc() {
  	var value = document.getElementById("location").value;
  
  var key = "abcdf_" + localStorage.length;
  localStorage.setItem(key, value);
 
  changeLoc1(value);
}
function changeLoc1(value){
  if(document.getElementById("members").value ==0){
  var change = document.getElementById("loc1");
  change.textContent = value;}
}
