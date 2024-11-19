import React, {useEffect, useState, useRef} from 'react';
import {fakeData as notes1} from '../assets/fakeData'
import NoteCard from '../components/NoteCard';
import axios from "axios";
import { IconButton } from '@mui/material';
import '../index.css'
import { Note } from '@material-ui/icons';
const NotesPage = () => {
	const userData = JSON.parse(localStorage.getItem("userData"));
	const server = process.env.REACT_APP_BACKEND;
	const [user, setUser] = useState([userData.data]);
	const [notes, setNotes] = useState([]);
	const [saving, setSaving] = useState(false);
	const keyUpTimer = useRef(null);
	useEffect(() => {
		getAllNotes();
		//console.log(notes.body);
	}, []);


	  function newNote() {
		
	  }
	  function delNotes() {
		
	  }
	 const saveNote = async () => {
		const response =  await axios.post(`${server}/notes/save`, notes, {
			headers: {
			  'Content-Type': 'application/json', // Optional, but ensures proper format
			},
		  });
		  console.log("save")
	  }

	  const saveHandler = async () =>  {

		try {
		  
		  //config 
		  const config = {
			headers: {
			  "Content-type": "application/json",
			},
		  };

		  const response = await axios.post(
			`${server}/notes/save/`,
			notes,
			config
		  );
	

		} catch (error) {
		  
		  console.log(error.reponse);

		}
		getAllNotes()
	
	  };


	  function getAllNotes() {
		const config = {
			headers: {
			  Authorization: `Bearer ${user.token}`,
			},
		  };
	  
		  axios.get(`${server}/notes/${userData.data._id}`, config).then((response) => {
			setNotes(response.data)
			//console.log("Notes res: ",response.data);
		  });  

	  }

	  function handleUpdation (data, id, pos) {

		
		const newNotes = notes.map((note) => {
			var temp = Object.assign({},note)
			
			if(temp.id == id && pos.x == 500000 && pos.y == 500000){
				
				temp.body = data;
				return temp;
			}
			else if(temp.id == id && data == "`"){
				temp.position = pos
				return temp
			}
			else{
				return temp
			}
		});

		setNotes(newNotes)
		//console.log(notes);	
		//saveHandler();
	  }

  return (
	<div>
		<IconButton sx = {{
				backgroundColor:"white"
			}}
			onClick={newNote}
		>
			+
		</IconButton>

		<IconButton sx = {{
				backgroundColor:"white"
			}}
			onClick={saveHandler}

		>
			save
		</IconButton>
	
	<div>
		{/* {notes1.map(note => (
			<NoteCard key = {note.$id} note = {note}/>
		))
		}	 */}
		{notes.map(note => (
			<NoteCard key = {note._id}note = {note} handleUpdation = {handleUpdation}/>
		))
		}

	</div>
	</div>
  )
};

export default NotesPage


