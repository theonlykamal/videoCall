const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
        let token;
        //const RHA = req.headers.authorization;
       // console.log(RHA.split(" ")[1]);
        

        if (
                req.headers.authorization &&
                req.headers.authorization.startsWith("Bearer")
        ) {
                
                
                try {
                        //console.log("inside try");
                        token = req.headers.authorization.split(" ")[1];
                        //console.log(token);
                        //console.log("after token");
                        
                        
                        const decoded = jwt.verify(token,process.env.JWT_SECRET);
                        req.user = await User.findById(decoded.id).select(-"password");
                        next();
                } catch (error) {
                        console.log(error);
                        
                        res.status(401);
                        throw new Error("Not Authorized, token failed");
                        
                }
        }

        if (!token) {
                res.status(401);
                throw new Error("Not authorized, no token");
                
        }
});

module.exports = { protect };