const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    id : {type: mongoose.Schema.Types.ObjectId},
    colors: {
        type: String,
        required: true
    },
    body: {
        type: String
    }, 
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true },
    }
})

module.exports = mongoose.model('Note', notesSchema);


