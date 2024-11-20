const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    // id : {type: mongoose.Schema.Types.ObjectId},
    colors: {
        type: String,
        required: false
    },
    body: {
        type: String
    }, 
    position: {
        x: { type: Number, required: false },
        y: { type: Number, required: false },
    }
})

module.exports = mongoose.model('Note', notesSchema);


