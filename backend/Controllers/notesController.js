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
        
        //console.log('save', req.body.note)
        
        //if (!note) return res.sendStatus(400);
        if( Object.keys(req.body).length > 1){
            const note1 = req.body.note;
            try {
            const note = await Note.create({user: note1.user, body: note1.body, colors: note1.colors, position: note1.position});
            } catch (err) {
                console.log(err);
            }
            if(note){
                console.log(note);
            res.sendStatus(200);
            }
        }

        const note = req.body;

        const updatedNote = await Note.findByIdAndUpdate(
            note._id,
            {body : note.body, position: note.position},
            {new : true}
            
        );
        res.sendStatus(200);
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
    } catch(err) {
        res.json({msg: "ERROR" , err})
        
    }
});
module.exports = { allNotes, saveNotes };