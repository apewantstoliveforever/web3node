const express = require('express'); // Import the Express framework
const http = require('http'); // Import the HTTP module for creating an HTTP server
const GUN = require('gun'); // Import the GUN library for real-time data synchronization

// Initialize the Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize GUN with the HTTP server
const gun = GUN({ web: server });

// Serve a simple HTML response at the root URL
app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello World'); // Send 'Hello World' as the response
});

// Serve GUN endpoints
app.use(GUN.serve); // Allow GUN to handle routes for real-time data

// Start the server on port 3020
const PORT = 3020; // Define the port number
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`); // Log the server URL
});

// Previous HTTPS Handling (commented out for clarity):
// const fs = require('fs'); // Import the filesystem module for reading SSL certificates
// const privateKey = fs.readFileSync('server.key', 'utf8'); // Read the SSL private key
// const certificate = fs.readFileSync('server.cert', 'utf8'); // Read the SSL certificate
// const credentials = { key: privateKey, cert: certificate }; // Create credentials object

// const https = require('https'); // Import the HTTPS module
// const httpsServer = https.createServer(credentials, app); // Create an HTTPS server
// const gunHttps = GUN({ web: httpsServer }); // Initialize GUN with the HTTPS server

// httpsServer.listen(PORT, () => { // Start the HTTPS server
//   console.log(`Server is listening on https://localhost:${PORT}`); // Log the HTTPS server URL
// });
