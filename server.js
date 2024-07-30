const http = require('http');
const express = require('express');
const GUN = require('gun');

const app = express();
const server = http.createServer(app);

// Initialize GUN with the server
const gun = GUN({ web: server });
// Set the server to listen on port 8080
app.use(express.static(__dirname));
app.use(gun.express);


server.listen(8080, () => {
  console.log('Server is listening on http://localhost:8080');
});
