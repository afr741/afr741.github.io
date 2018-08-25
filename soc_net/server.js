var express = require('express');

var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
var json = require('express-json');
var geolocation = require('geolocation');


app.use('/',express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*********************************************
 * 
 * Post requests to handle the addition of friends
 * for each member
 * 
 * 
 *************************************/

app.post('/addMohamad',function(req,res){    //post request for adding friends to Mahamad's page
	var test = req.body.friendList;
	var linkk = "public/js/json/mohamadFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/index.html');
});


app.post('/addMike',function(req,res){           //post request for adding friends to Mike's page
	var test = req.body.friendList;
	var linkk = "public/js/json/mikeFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/mike.html');
});


app.post('/addMiley',function(req,res){        //post request for adding friends to Ben's page
	var test = req.body.friendList;
	var linkk = "public/js/json/mileyFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/miley.html');
});


app.post('/addJake',function(req,res){          //post request for adding friends to Anush's page
	var test = req.body.friendList;
	var linkk = "public/js/json/jakeFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/jake.html');
});

 
app.post('/addBrandon',function(req,res){      //post request for adding friends to Brandon's page
	var test = req.body.friendList;
	var linkk = "public/js/json/brandonFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/brandon.html');
});


app.post('/addKhloe',function(req,res){         //post request for adding friends to Johny's page
	var test = req.body.friendList;
	var linkk = "public/js/json/khloeFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/khloe.html');
});


app.post('/addJosh',function(req,res){           //post request for adding friends to Josh's page
	var test = req.body.friendList;
	var linkk = "public/js/json/joshFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/josh.html');
});


app.post('/addCameron',function(req,res){          //post request for adding friends to Liam's page
	var test = req.body.friendList;
	var linkk = "public/js/json/cameronFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/cameron.html');
});


app.post('/addAmy',function(req,res){         //post request for adding friends to Miley's page
	var test = req.body.friendList;
	var linkk = "public/js/json/amyFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/amy.html');
});


app.post('/addLilly',function(req,res){         //post request for adding friends to Jake's page
	var test = req.body.friendList;
	var linkk = "public/js/json/lillyFriends.json";
	console.log("The friend " +test + " was recieved by Post");
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	addF(t,test,linkk);
	
	res.sendFile(__dirname + '/lilly.html');
});

/*********************************************
 * 
 * Post requests to handle the deletion of friends
 * for each member
 * 
 * 
 *************************************/

/*app.post('/delete',function(req,res){
	var test = req.body.friendList1;
	var link = "public/js/friends.json"
	var contents = fs.readFileSync(link);
	var t = JSON.parse(contents);
	
	deleteF(t,test,link);
	
	res.sendFile(__dirname + '/index.html');
});*/


app.post('/deleteMohamad',function(req,res){       //post request for deleting a friend from Mahamad's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/mohamadFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/index.html');
});


app.post('/deleteMike',function(req,res){				 //post request for deleting a friend from Mike's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/mikeFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/mike.html');
});


app.post('/deleteLilly',function(req,res){			 //post request for deleting a friend from Ben's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/lillyFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/lilly.html');
});


app.post('/deleteKhloe',function(req,res){			 //post request for deleting a friend from Anush's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/KhloeFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/khloe.html');
});


app.post('/deleteBrandon',function(req,res){			 //post request for deleting a friend from Brandon's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/brandonFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/brandon.html');
});


app.post('/deleteAmy',function(req,res){			 //post request for deleting a friend from Johny's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/amyFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/amy.html');
});


app.post('/deleteJosh',function(req,res){			 //post request for deleting a friend from Josh's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/joshFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/josh.html');
});


app.post('/deleteCameron',function(req,res){			 //post request for deleting a friend from Liam's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/cameronFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/cameron.html');
});


app.post('/deleteMiley',function(req,res){			 //post request for deleting a friend from Miley's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/mileyFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/mileycyr.html');
});


app.post('/deleteJake',function(req,res){			 //post request for deleting a friend from Jake's page
	var test = req.body.friendList1;
	var linkk = "public/js/json/jakeFriends.json";
	var contents = fs.readFileSync(linkk);
	var t = JSON.parse(contents);
	
	deleteF(t,test,linkk);
	
	res.sendFile(__dirname + '/jakecandar.html');
});

/*********************************************
 * 
 * Post requests to handle the location of friends
 * for each member
 * 
 * 
 *************************************/
app.post('/locMohamad',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Mohamad Hamadi";
	changeF(t,test, name);
	res.sendFile(__dirname + '/mh-location.html');
});

app.post('/locBrandon',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Brandon Kelvin";
	changeF(t,test, name);
	res.sendFile(__dirname + '/brandon-location.html');
});

app.post('/locLilly',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Lilly Singh";
	changeF(t,test, name);
	res.sendFile(__dirname + '/lilly-location.html');
});

app.post('/locCameron',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Cameron Knight";
	changeF(t,test, name);
	res.sendFile(__dirname + '/cameron-location.html');
});

app.post('/locAmy',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Amy Williams";
	changeF(t,test, name);
	res.sendFile(__dirname + '/amy-location.html');
});

app.post('/locMiley',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Miley Cyr";
	changeF(t,test, name);
	res.sendFile(__dirname + '/miley-location.html');
});

app.post('/locMike',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Mike Mits";
	changeF(t,test, name);
	res.sendFile(__dirname + '/mike-location.html');
});

app.post('/locJosh',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Josh Davis";
	changeF(t,test, name);
	res.sendFile(__dirname + '/josh-location.html');
});

app.post('/locKhloe',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Khloe Ka";
	changeF(t,test, name);
	res.sendFile(__dirname + '/khloe-location.html');
});

app.post('/locJake',function(req,res){
	var test = req.body.locations;
	console.log("The location  was recieved by Post");
	var contents = fs.readFileSync("public/js/listoflocations.json");
	var t = JSON.parse(contents);
	var name = "Jake Candar";
	changeF(t,test, name);
	res.sendFile(__dirname + '/jake-location.html');
});

app.get('/listoflocationsjson',function(req,res){
	res.sendFile(__dirname + '/js/listoflocations.json');
});
///////////////////////////////////////////

app.get('/friendsjson',function(req,res){
	res.sendFile(__dirname + '/js/friends.json');
});



/*********************************************
 * 
 * Get requests to handle the display of the html code
 * correctly
 * 
 * 
 *************************************/


app.get('/',function(req,res){
	res.sendFile(__dirname + '/members.html');
});


app.get('/brandonkelvin',function(req,res){
	res.sendFile(__dirname + '/brandon.html');
});


app.get('/index',function(req,res){
	res.sendFile(__dirname + '/index.html');
	
});


app.get('/jakecandar',function(req,res){
	res.sendFile(__dirname + '/jake.html');
});


app.get('/contact',function(req,res){
	res.sendFile(__dirname + '/contact.html');
});


app.get('/mh-location',function(req,res){
	res.sendFile(__dirname + '/mh-location.html');
});


app.get('/mikemits',function(req,res){
	res.sendFile(__dirname + '/mike.html');
});


app.get('/mileycyr',function(req,res){
	res.sendFile(__dirname + '/miley.html');
});


app.get('/josh',function(req,res){
	res.sendFile(__dirname + '/josh.html');
});


app.get('/lilly',function(req,res){
	res.sendFile(__dirname + '/lilly.html');
});


app.get('/khloe',function(req,res){
	res.sendFile(__dirname + '/khloe.html');
});



app.get('/cameron',function(req,res){
	res.sendFile(__dirname + '/cameron.html');
});


app.get('/amy',function(req,res){
	res.sendFile(__dirname + '/amy.html');
});



app.get('/members',function(req,res){
	res.sendFile(__dirname + '/members.html');
});

app.get('/miley-location',function(req,res){
	res.sendFile(__dirname + '/miley-location.html');
});

app.get('/brandon-location',function(req,res){
	res.sendFile(__dirname + '/brandon-location.html');
});

app.get('/mike-location',function(req,res){
	res.sendFile(__dirname + '/mike-location.html');
});

app.get('/jake-location',function(req,res){
	res.sendFile(__dirname + '/jake-location.html');
});

app.get('/josh-location',function(req,res){
	res.sendFile(__dirname + '/josh-location.html');
});

app.get('/khloe-location',function(req,res){
	res.sendFile(__dirname + '/khloe-location.html');
});

app.get('/amy-location',function(req,res){
	res.sendFile(__dirname + '/amy-location.html');
});

app.get('/lilly-location',function(req,res){
	res.sendFile(__dirname + '/lilly-location.html');
});

app.get('/cameron-location',function(req,res){
	res.sendFile(__dirname + '/cameron-location.html');
});



app.listen(8888);  //shows what port the server is listening on


/*********************************************
 * 
 * Method to handle the adding friend to the json file
 * 
 * 
 *************************************/
function addF(t,test,linkk){   //method to add a friend
	var obj = t;  //stores current json friend list
	var v = test; //stores friend to be added to json
	var dup = false;  //boolean to check if its a duplicate add
	
	for(var i = 0;i<obj.length;i++){  //for loop to check if there are any duplicates
		if(obj[i].name === v){
			dup = true;
		}
	}
	
	if(dup){console.log("Tried to add duplicate");}
	
	else{
	
	obj.push({   //adds friend to json
		name:test
	});
	
	var a = JSON.stringify(obj);
	
	fs.writeFile(linkk, a, function(err) {  //writes the new list to the json file
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 
	}
	
	
}
/////////////////////////////////////
function changeF(t,test, name){
	var obj = t;
	var v = test;
	for(var i =0;i<obj.length;i++){
		if(obj[i].name == name){
			obj[i].location = v;	
		}
	}
	var a = JSON.stringify(obj);
	fs.writeFile("public/js/listoflocations.json", a, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	}); 
}
/////////////////////////////////////




/*********************************************
 * 
 * Method to handle the deletion of a friend from the json file
 * 
 * 
 *************************************/

function deleteF(t,test,link){   //method to delete a friend
	var obj = t;   //stores current json friend list
	var v = test;  //stores friend to be added to json
	var obj1 =[];  //creates new array for copying the non deleted elements
	
	for(var i =0;i<obj.length;i++){
			
		
		if(obj[i].name === v){  //checks if the obj is the one to delete
			console.log("Object " + v +" is being deleted");
		}
		
		else{
			var n = obj[i].name;
			console.log("Object " + n +" is not being deleted");
			obj1.push({   //adds the non deleted friends to the new array
				name:n
			}); 
		}
		
	}
	
	var a = JSON.stringify(obj1);
	fs.writeFile(link, a, function(err) {  //writes the revised friend list back to json
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 
	
}