const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const cors = require('cors');




var date = new Date();
const app = express();


const corsOptions ={
    origin: '*', 
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));


dotenv.config();
app.use(express.json());


const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const eventRoutes = require("./Routes/eventRoutes")


mongoose.connect(process.env.MONGO_URI);
const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo... server 💚 connected");
    } catch (err) {
        console.log("mongo... server ⛔ connected",err.message);
    }
  
};

connectDb();


// const allowCors = require("./middleware/allowCors");
// app.use("/(.*)",allowCors);

app.get("/",(req,res) => {
    res.send("API is running12233");
});
app.use("/user",userRoutes);
app.use("/chat",chatRoutes);
app.use("/message",messageRoutes);
app.use("/event",eventRoutes);



const PORT = process.env.PORT;

const server = app.listen(5000, console.log(date+ " node... Server is running {💨🏃‍➡️}"));
// const io = require("socket.io")(server,{
//     cors: {
//         origin: "*"
//     },
//     pingTimeout: 60000
// });

// io.on("connection", (socket) => {

//     socket.on("setup", (user) => {
//         socket.join(user.data._id);
//         socket.emit("connected");
//     });

//     socket.on("join chat", (room) => {
//         socket.join(room);
//     });

//     socket.on("new message", (newMessageStatus) => {
//         var chat = newMessageStatus.chat;
//         if(!chat.users) {
//             return console.log("chat users not defined");
//         }
//         chat.users.forEach((user) => {
//             if(user._id == newMessageStatus.sender._id) return;
//             socket.in(user._id).emit("message recevied", newMessageRecevied);
//         });
//     });
// });

