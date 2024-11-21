const express = require('express');
const app2 = express();
const {v4: uuidv4} = require('uuid');
const server2 = require('http').Server(app2);
const io = require('socket.io')(server2);



const cors = require('cors');
const { log } = require('console');
const corsOptions ={
    origin: '*', 
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app2.use(cors(corsOptions));



app2.set('view engine', 'ejs');

app2.use(express.static('public'));
 
app2.get('/', (req, res) => {

    var uuid = uuidv4();
    res.send(uuid);

    
})


app2.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room});
})

io.on('connection', (socket) => {
    console.log("hi")
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', userId);

    })
})
io.on('disconnect', () => {
    socket.to(roomId).emit('user-disconnected', userId);
})

const { ExpressPeerServer } = require("peer");

const peerServer = ExpressPeerServer(server2, {
	debug: true,
	path: "/peerjs",
    proxied: true,
    port: "443",
});

app2.use("/", peerServer);


server2.listen(2500);
