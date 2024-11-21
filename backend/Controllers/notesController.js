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
        
        //console.log('save', req.body.note)
        
        //if (!note) return res.sendStatus(400);
        if( Object.keys(req.body).length == 2) {
            if (req.body.new) {
                const note1 = req.body.note;
                console.log(note1);
                try {
                    const note = await Note.create({
                        colors: note1.colors,
                        user: note1.user, 
                        body: note1.body, 
                        position: note1.position
                    });
                    if (note) {            
                        res.status(201).json({_id: note._id});
                    }   
                } catch (err) {
                    console.log(err);
                }
        } 
        else {
            try {
                console.log("hibuyd");
                Note.deleteOne({_id: req.body.note._id}).then((result) => {console.log(result)});
                res.sendStatus(200);
            } catch (err) {
                console.log(err);
            }
        }
            
        } else {
            try {
                const note = req.body;
                console.log("save notes", note);
                const updatedNote = await Note.findByIdAndUpdate(
                    note._id,
                    {body : note.body, position: note.position},
                    {new : true}
                    
                );
                res.sendStatus(200);
                if (!updatedNote) {
                    return res.status(404).json({ message: 'Note not found' });
                }
            }
            catch(err) {
                res.json({msg: "ERROR" , err})
                
            }
        }
});
module.exports = { allNotes, saveNotes };