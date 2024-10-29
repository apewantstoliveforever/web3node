"use strict";
const http = require("http");
const express = require("express");
const GUN = require("gun");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const gun = GUN({ web: server });

// Initialize Socket.IO with CORS options
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "upskirt-asian-girl.lol/"], // Replace with your frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    },
});

app.use(GUN.serve);

app.get("/", (req, res) => {
    res.send('Hello World');
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("message", (msg) => {
        console.log("Message received:", msg);
        io.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(3008, () => {
    console.log("Server is listening on http://localhost:3008");
});
