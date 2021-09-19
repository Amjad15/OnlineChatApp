const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const chatRouter = require('./routes/chat.route');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Use express to Specify Static Files Path
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use Routers
app.use('/', chatRouter);

io.on('connection', (socket) => {
    console.log('User Connected');
    socket.on('disconnect', () => {
      console.log('User is Disconnected');
    });
  
    socket.on('messageing', (chatmsg) => {
      io.emit('messageing', chatmsg);
    });
  });


const port = process.env.port || 3770 ; 
server.listen(port, ()=>console.log(`Listening to the port : ${port} `));



