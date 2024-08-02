const http = require('http');
const express = require('express');
const GUN = require('gun');

// Initialize Express and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize GUN with the server
const gun = GUN({ web: server });

// Middleware to add ngrok header
app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

// Serve HTML that says "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Serve GUN with the server
app.use(GUN.serve);

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
