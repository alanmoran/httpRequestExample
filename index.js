//Require the request module
//https://www.npmjs.com/package/request
var request = require('request');
//Defaults to a GET request
request('http://www.google.com', function(error, response, body) {
    //Check for error or if HTTP status code is not 200
    if (error && response.statusCode != 200) {
        console.log("GOOGLE IS DOWN!");
        return console.log(error, response.statusCodes);
    }
    console.log(body); // Show the HTML for the Google homepage.
});