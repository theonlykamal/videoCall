const mongoose = require("mongoose");

const eventModel = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    id : {type: mongoose.Schema.Types.ObjectId},
    name: {
        type: String,
        trim: true,
    },
    startTime : {
        type : String,
        trim: true,
    },
    endTime : {
        type : String,
        trim: true,
    },
    isChecked : {type : Boolean},
    
},{
    timeStamp: true,
});

const Message = mongoose.model("Event",eventModel);
module.exports = Event;