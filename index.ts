const express = require('express');
const { createServer } = require('https');
const fs = require('fs');
const GUN = require('gun');

// Read SSL certificate files
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Initialize Express app and HTTPS server
const app = express();
const server = createServer(credentials, app);

// Initialize GUN with the server
const gun = GUN({ web: server });

// Serve HTML that says "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Serve GUN with the server
app.use(GUN.serve);

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on https://localhost:${PORT}`);
});
