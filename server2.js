// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet
var http= require('http');
// next define port, the channel server listens on
var PORT1 = 7000;
var PORT2 = 7500;
// handle request function

var randomgood=['you look nice!','your GREAT!','Way to go!'];
var randombad=['you look bad!','your a SLACKER!', 'work Harder!'];

function handleRequest1(request, response){
    response.end(randomgood[Math.floor(Math.random()*randomgood.length)]);
    
}

function handleRequest2(request, response){
    response.end(randombad[Math.floor(Math.random()*randombad.length)]);
    
    
}


// create server

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
    console.log('Listening on PORT1:' + PORT1);
    
});

server2.listen(PORT2, function() {
    console.log('Listening on PORT2:' + PORT2);
    
});