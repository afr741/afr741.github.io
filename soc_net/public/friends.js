
window.onload = init;
function init() {
	var button = document.getElementById("addfriend1");
	button.onclick = createFriend;
  var button2 = document.getElementById("addfriend2");
	button2.onclick = createFriend2;
    
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if (key.substring(0, 6) == "frindd") {
			var value = localStorage.getItem(key);
			addFriendToDOM(value);
		}
	}
}

function createFriend() {
	var value = document.getElementById("friend1").textContent;
	var key = "frindd_" + localStorage.length;
	localStorage.setItem(key, value);
	var button = document.getElementById("addfriend1");
	button.disabled=true;
	addFriendToDOM(value);
	
}
function createFriend2() {
	var value = document.getElementById("friend2").textContent;
	var key = "frindd_" + localStorage.length;
	localStorage.setItem(key, value);
	var button = document.getElementById("addfriend2");
	button.disabled=true;
	addFriendToDOM(value);
}


function addFriendToDOM(value) {
	var friends = document.getElementById("s2");
	var friend = document.createElement("li");
	var span = document.createElement("span");

	span.innerHTML = value;
	friend.appendChild(span);
	friends.appendChild(friend);
}


