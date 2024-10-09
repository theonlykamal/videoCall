const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const cors = require('cors');




var date = new Date();
const app = express();


const corsOptions ={
    origin:'https://my-stop-api.vercel.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


dotenv.config();
app.use(express.json());


const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");


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

app.get("/",(req,res) => {
    res.send("API is running12233");
});
app.use("/user",userRoutes);
app.use("/chat",chatRoutes);
app.use("/message",messageRoutes);



const PORT = process.env.PORT;

app.listen(5000, console.log(date+ " node... Server is running {💨🏃‍➡️}"));
