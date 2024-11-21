import Trash from '../icon/Trash';
import {useRef, useEffect, useState} from 'react';
import { setNewOffset, setZIndex, autoGrow} from '../util';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const NoteCard = ({note, handlePositionUpdation, handleDataUpdation, delHandler}) => {
// let position = JSON.parse(note.position);
    //const userData = JSON.parse(localStorage.getItem("userData"));

    // const colors = JSON.parse(note.colors);
    const body = note.body;
    
    const [position, setPositon] = useState(note.position);
    
    let mouseStartPos = { x: 0, y: 0 };
 
    const cardRef = useRef(null);
    const textAreaRef = useRef(null);
    
    const mouseMove = (e) => {
    //1 - Calculate move direction

        let mouseMoveDir = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY,
        };
     
        //2 - Update start position for next move.
        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;
     
        //3 - Update card top and left position.
        const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
        setPositon(newPosition);
        console.log(newPosition);
        handlePositionUpdation(note._id,newPosition)
    };
    
    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
    };
    
    const mouseDown = (e) => {

        setZIndex(cardRef.current);
        mouseStartPos.x = e.clientX;

        mouseStartPos.y = e.clientY;
     
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    };

    useEffect(() => {
    autoGrow(textAreaRef);
    //console.log(body);

    }, [])

    const changeHandler = (e) => {
         var _body = e.target.value;
         handleDataUpdation(note._id, _body);
    }

   const delHandler2 = () => {
    delHandler(note._id);
   }
    
    

  return (
    <div
    className = "card"
    ref = {cardRef}
    style = {{
        backgroundColor: "#A6DCE9",
        left: `${position.x}px`,
        top: `${position.y}px`,
        
    }}
    >

            <div
                className="card-header"
                style={{ backgroundColor: "#9BD1DE" }}
                onMouseDown = {mouseDown}
            >
                <IconButton onClick = {delHandler2}>
                    <DeleteForeverIcon/>
                </IconButton>
                
            </div>

            <div className="card-body">
            <textarea  
                ref = {textAreaRef}
                style={{ color: "#18181A" }}
                defaultValue={body}
                onChange={changeHandler}
                onInput={() => {
                    autoGrow(textAreaRef);
               }}
               onFocus={() => {
                setZIndex(cardRef.current);}}
            ></textarea>
            </div>
  
    </div>
  )
};

export default NoteCard