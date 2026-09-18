let path = require('path');
let express = require('express');

let app = express();

//website
// will contain the following routes:
//app.com - home
//app.com/help - help page
//app.com/about - about page

//app takes two arguments
//1. route
//2. function for when the route is accessed
    // a. req -request - information  about the incoming request to the server
	//. res -respone- information about the outgoing response to the server
	
/*app.get('', (req, res) => {
	// tell what happens whwen the route is accessed.
});
*/

let publicDirectory = path.join(__dirname, '../public');

app.set('view engine', 'hbs');

app.use(express.static(publicDirectory));

//home route - / or ''
/* app.get('', (req, res) => {
	res.send("<h1>Home Route</h1>");
});

/* app.get('/help', (req, res) => {
	res.send("You have reached the help page");
});

app.get('/about', (req, res) => {
	res.send([{
		name: 'Kiarey Wilkes',
		course: 'Server Side JavaScript'
	},
	{
	
	
	}
	]);
}); */

app.get('/weather', (req, res) => {
	res.send("You have reached the Weather page");
}); */

//use.app.listen to start up the server
//takes at least 1 parameter - tells the port number where the application
//will be served port 3000 is a common development port for local machines
//app.listen(3000);

//add a function as an argument which can tell whats happens when
// the serveer is loaded
app.listen(3000, () =>{
	console.log('Server is live on port 3000. ');
	console.log('Open your web brower and go to the following URL - localhost:3000');
    console.log('To exit, come back to Node.js command prompt and enter Ctrl+C');
});
