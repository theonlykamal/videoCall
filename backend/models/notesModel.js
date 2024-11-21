const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    // id : {type: mongoose.Schema.Types.ObjectId},
    colors: {
        type: String,
    },
    body: {
        type: String
    }, 
    position: {
        x: { type: Number },
        y: { type: Number },
    }
})

module.exports = mongoose.model('Note', notesSchema);


