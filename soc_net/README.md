# comp3715
Social Media design project

In order to install the required npm modules for the server, type npm install while in the same directory as the server and package.json file. 
If this does not install all the required modules the commands to install them serperatley are:

npm install express

npm install body-parser

npm install geolocation

npm install express-json

There is also a zip file called Website project zip located on the github which contains all the files and modules required to run the server.

Once these modules are installed you can use the command node server.js to start the server. Node must be installed in order to run the server.

To run it from a machine locally make sure in the server file the line app.listen(8888); has 8888 inside the brackets. Then in a browser type localhost:8888 (will be 8888 by default). The hosted site link is sc-3.cs.mun.ca.

All persistent storage on the site is handled through the server using json files.

The home page contains all 10 members on the site. Each member has the ability to pick from a list of friends to add and can also delete any friends they have. This is done by the use of drop down lists and buttons. The same friend can not be added twice to the page as per the code (since it does not make sense to be able to add the same friend twice) and a warning that you tried will appear in the server. 

The node.js keeps track of each members friends list so they stay persistent. Each member also has their own location page which stores their own location and the location of their friends in the table below the map. 

The location for all members is stored persistenly which is then compared against the users friend list and outputs their friends locations in the table. For users they have the option of storing their true location and several other locations around St. John's by a drop down menu and button.

The website is built around the idea of displaying on a mobile browser along with desktop so the website will scale for size to allow the pages to be easily viewable on mobile or desktop devices.

As of submission add friend, delete friend and location map works for all members. Locally there seems to be no problems running
on any browser but on the mun server it seems as chrome may have a problem displaying map. Firefox seems to work fine.

Website work was completed by Josh, Mahamad and Anush.
