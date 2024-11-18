const socket = io('/')
const videoGrid = document.getElementById('video-grid')

const myPeer = new Peer(undefined, {
    host: '/',
    port: '2501'
})

// console.log(myPeer)

const myVideo = document.createElement('video');

myVideo.muted = true

const peers = {}
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    // myVideo.setAttribute('name',`00000`);
    addVideoStream(myVideo, stream);
    myPeer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream);
        }) 
    })
    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream);
    })
    socket.on('user-disconnected', userId => {
        //console.log("11"+peers);
        peers[userId].close();
    })
    
})
myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id);
})

socket.on('user-disconnected', userId => {
    console.log(userId);
})

function connectToNewUser(userId, stream) {
    
    const video = document.createElement('video');
    // video.setAttribute('name',`${userId}`);
    const call = myPeer.call(userId, stream);
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
    peers[userId] = call;
    call.on('close', () => {
        video.remove()
    })
}
function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    
    // const wrapperDiv = document.createElement('div')

    // wrapperDiv.setAttribute('id',`${(video.attributes.getNamedItem('name').value)}`)
    // wrapperDiv.style.objectFit = 'cover'
    // const para = document.createElement('p')
    // para.textContent += `kk${video.id}`;
    // wrapperDiv.textContent 
    // wrapperDiv.append(video);
    // wrapperDiv.attributes.getNamedItem
    // wrapperDiv.append(para)
    videoGrid.append(video);
}

























// Make the DIV element draggable:
dragElement(document.getElementById('00000'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
//   }

  function dragMouseDown(e) {
    console.log("mouseDown");
    
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}