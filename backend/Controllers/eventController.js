const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");
const eventModel = require("../models/eventModel");


const loginController = expressAsyncHandler( async (req,res) => {
    
    //console.log(req.body)
    const { name , password } = req.body;
    console.log(name,password);
    
    const user = await userModel.findOne({name});

    if(user && (await user.matchPassword(password)))
    {

        const reponse  = {
            _id: user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)

        };

        res.json(reponse);

    }
    else{
        res.status(401);
        throw new Error("Inavalid UserName or PassWord");
        
    }
});

const addEventController = expressAsyncHandler( async (req,res) => {
    const {name ,startTime , endTime , isChecked} = req.body;
    
    //check for all fields
    if(!name || !startTime || !isChecked) 
    {
        res.send(400);
        throw new Error("All necessary inputs fields have not been filled");
        
    }
    //create an entry in the db
    const event = await eventModel.create( {name ,startTime , endTime});

    if(event)
    {
        res.status(201).json({
            _id: event._id,
            name : event.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)

        });
    }
    else {
        res.status(400)
        throw new Error("Registration error");
        
    }
});


const fetchAllEventsContoller = expressAsyncHandler(async (req,res) =>{
    //await new Promise(r => setTimeout(r, 2000));
    const keyword = req.query.search
        ? {
            $or: [
                {
                    name: { $regex: req.query.search, $options: "i" }
                }
            ],
        }
        : {};
    console.log(req.query.search);
        
    const events = await eventModel.find(keyword).find({
        _id: { $ne: req.event._id },
    });
    res.send(events);
} );


module.exports = {loginController, addEventController, fetchAllEventsContoller }; 