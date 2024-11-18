const socket = io('/')
const videoGrid = document.getElementById('video-grid')

const myPeer = new Peer(
//     undefined, {
//     // host: '/',
//     // port: "2500",
    

// }
)

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
























