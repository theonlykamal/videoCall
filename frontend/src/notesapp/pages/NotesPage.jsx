import React, {useEffect, useState, useRef} from 'react';
import {fakeData as notes1} from '../assets/fakeData'
import NoteCard from '../components/NoteCard';
import axios from "axios";
import { IconButton } from '@mui/material';
import '../index.css'
import { useNavigate } from 'react-router-dom';

const NotesPage = () => {

	const userData = JSON.parse(localStorage.getItem("userData"));
	const nav = useNavigate();

	useEffect(() => {
		getAllNotes();
		if (!userData) {
			console.log("User not Authenticated");
			nav("/et/profile");
		  }
		
	}, []);
	
	const server = process.env.REACT_APP_BACKEND;
	const [user, setUser] = useState([userData.data]);
	const [notes, setNotes] = useState([]);
	//const [saving, setSaving] = useState(false);
	//const keyUpTimer = useRef(null);
	
	const addNoteonClick = async () => {
		const newNote = {note: {body: "", user: userData.data._id, colors: "xyz", position: {x: 503, y: 26}}, new: true};
		const config = {
			headers: {
			"Content-type": "application/json",
			},
		};

		const response = await axios.post(
			`${server}/notes/save/`,
			newNote,
			config
		);
		newNote._id = response.data._id;
		var temp = notes;
		temp.push(newNote.note);
		setNotes(temp);
		getAllNotes();
	}
	  const saveHandler = async () =>  {
		for (let i = 0; i < notes.length; i++) {
			try {
			//config 
			const config = {
				headers: {
				"Content-type": "application/json",
				},
			};

			const response = await axios.post(
				`${server}/notes/save/`,
				notes[i],
				config
			);
			console.log(response.status);

			} catch (error) {
			
			console.log(error.reponse);

			}
		}
		//getAllNotes	()
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

	  const handleDataUpdation = async (id, data) => {
		console.log("before updation", notes);
		var temp = notes;
		for (let i = 0; i < temp.length; i++) {
			if (temp[i]._id == id) {
				temp[i].body = data;
			}	
		}
		setNotes(temp);
		console.log("after updation", notes);


	  }

	  const handlePositionUpdation = async (id, pos) => {
		var temp = notes;
		for (let i = 0; i < temp.length; i++) {
			if (temp[i]._id == id) {
				temp[i].position = pos;
			}	
		}
		setNotes(temp);
		console.log("after", notes);
	  }

	  const delHandler = async (id) => {
		console.log("hi");
		const delMessage = {note: {_id: id}, new: false};
		const config = {
			headers: {
			"Content-type": "application/json",
			},
		};
		const response = await axios.post(
			`${server}/notes/save/`,
			delMessage,
			config
		);
		console.log(response.data);
		const temp = [];
		for (var i = 0; i < notes.length; i++) {
			if (notes[i]._id != id) {
				temp.push(notes[i]);
			}
		}
		setNotes(temp);
	  }
  return (
	<div>
		<IconButton sx = {{
				backgroundColor:"white"
			}}
			onClick={addNoteonClick}
			id='cs-button'
			style={{
				width: "40px",
				height: "40px",
				position: "absolute",
				zIndex: "99990",
				top : "45px",
				left:"45px",
				fontSize: "40px",
				borderRadius: "9999px",
				display: "flex",
				alignItems: "center",
			}}
		>
			+
		</IconButton>

		<IconButton sx = {{
				backgroundColor:"white"
			}}
			onClick={saveHandler}
			id='cs-button'
			style={{
				// width: "40px",
				 height: "50px",
				position: "absolute",
				zIndex: "99990",
				top : "40px",
				left:"100px",

				fontSize: "35px",
				borderRadius: "9999px",
				display: "flex",
				alignItems: "center",
			}}

		>
			save
		</IconButton>
	
	<div>
		{/* {notes1.map(note => (
			<NoteCard key = {note.$id} note = {note}/>
		))
		}	 */}
		{notes.map(note => (
			
			<NoteCard note = {note} handlePositionUpdation = {handlePositionUpdation} handleDataUpdation = {handleDataUpdation} delHandler = {delHandler}/>
		))
		}

	</div>
	</div>
  )
};

export default NotesPage


