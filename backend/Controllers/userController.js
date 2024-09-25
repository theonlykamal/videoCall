const express = require("express");
const userModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");


const loginController = expressAsyncHandler( async (req,res) => {
    
    console.log(req.body)
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

const registerController = expressAsyncHandler( async (req,res) => {
    const {name ,email , password} = req.body;
    
    //check for all fields
    if(!name || !email || !password) 
    {
        res.send(400);
        throw new Error("All necessary inputs fields have not been filled");
        
    }

    //pre-existing user
    const userExist = await userModel.findOne({ email });
    if(userExist)
    {
        res.status(405)
        throw new Error("User already Exists");
    }

    //userName already Taken
    const userNameExist = await userModel.findOne({ name });
    if(userNameExist)
    {
        res.status(406)
        throw new Error("UserName already Taken");
    }

    //create an entry in the db
    const user = await userModel.create( {name,email,password});

    if(user)
    {
        res.status(201).json({
            _id: user._id,
            name : user.name,
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


const fetchAllUsersController = expressAsyncHandler(async (req,res) =>{
    //await new Promise(r => setTimeout(r, 2000));
    const keyword = req.query.search
        ? {
            $or: [
                {
                    name: { $regex: req.query.search, $options: "i" }
                },
                {
                    email: { $regex: req.query.search, $options: "i" }
                }
            ],
        }
        : {};
    console.log(req.query);
        
    const users = await userModel.find(keyword).find({
        _id: { $ne: req.user._id },
    });
    res.send(users);
} );


module.exports = {loginController, registerController, fetchAllUsersController }; 