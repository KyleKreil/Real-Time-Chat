const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("public"));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/');
});

io.on('connection', (socket) => {
    console.log("User has connected");
    socket.on('chat message', msg => {
        console.log("User sending a message, emitting to everyone");
        io.emit('chat message', msg);
    });
});

io.on('disconnect', (reason) => {
    console.log("User has left "+reason);
        io.emit('chat message', "A user has left");
});

http.listen(3000, () => {
  console.log('server running at port 3000');
});