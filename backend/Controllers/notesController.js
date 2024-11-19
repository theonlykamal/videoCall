const expressAsyncHandler = require("express-async-handler");
const Note = require("../models/notesModel");


const allNotes = expressAsyncHandler(async (req,res) => {
        try {
                const notes = await Note.find({ user: req.params.userId })   
                        .populate("colors")
                        .populate("body")
                        .populate("position")
                        .populate("_id")
                        .populate("user");
                res.json(notes);
        } catch (error) {
                res.status(400);
                throw new Error(error.message);
        }
});
const saveNotes = expressAsyncHandler(async (req,res) => {
    try{    
        // console.log('save', req.body)
        const notes = req.body;
        console.log(notes);
        await Promise.all(notes.map(async (note) => {
            if(!note) {
                    return res.sendStatus(400);
            }
            {
                const updatedNote = await Note.findByIdAndUpdate(
                    note._id,
                    {body : note.body, position: note.position},
                    {new : true}
                    
                );
                //console.log(updatedNote);

                if (!updatedNote) {
                    return res.status(404).json({ message: 'Note not found' });
                }
            } 
        }));
    } catch(err) {
        res.send(500).json({msg: ERROR , err})
        
    }
});
module.exports = { allNotes, saveNotes };