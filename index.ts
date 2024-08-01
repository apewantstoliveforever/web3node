const http = require('http');
const express = require('express');
const GUN = require('gun');

// Initialize Express and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize GUN with the server
const gun = GUN({ web: server });

//serve html say hello world
app.get('/', (req, res) => {
  res.send('Hello World');
});

// // Serve GUN with the server
// app.use(gun.express);


// Start the server
server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
