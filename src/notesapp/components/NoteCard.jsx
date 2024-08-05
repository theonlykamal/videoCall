import Trash from '../icon/Trash';
import {useRef, useEffect, useState} from 'react';
import { setNewOffset, setZIndex, autoGrow} from '../util';

const NoteCard = ({note}) => {
// let position = JSON.parse(note.position);

    const colors = JSON.parse(note.colors);
    const body = JSON.parse(note.body);
    const [position, setPositon] = useState(JSON.parse(note.position));
    
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

    }, [])

   
    
    

  return (
    <div
    className = "card"
    ref = {cardRef}
    style = {{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
        
    }}
    >

            <div
                className="card-header"
                style={{ backgroundColor: colors.colorHeader }}
                onMouseDown = {mouseDown}
            >
                <Trash />
            </div>
            


            <div className="card-body">
            <textarea  
                ref = {textAreaRef}
                style={{ color: colors.colorText }}
                defaultValue={body}
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