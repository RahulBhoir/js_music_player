// function playSong(){
//     const player = document.getElementById('track');

//     if(player.canPlayType("audio/mpeg")){
//         player.setAttribute('src','songs/Mada_Faqa.mp3')
//     }else{
//         console.log('format not supported');
//     }



var DIR_PATH = '';
var songList = [];
var currently_playing_index = 0;

function loadSong(song){
    const player = document.getElementById('track');
    currently_playing_index = songList.indexOf(song)
    console.log(currently_playing_index);
    if(player.canPlayType('audio/mpeg')){
        player.setAttribute('src', DIR_PATH + song);
        document.getElementsByTagName('p').innerText = song;
    }
}

function prevSong(){    
    const prevSongIndex = currently_playing_index === 0? songList.length -1 : currently_playing_index - 1; 
    loadSong(songList[prevSongIndex]);
}

function nextSong(){
    const nextSongIndex = currently_playing_index === songList.length - 1 ? 0 : currently_playing_index + 1;
    loadSong(songList[nextSongIndex]);
}

document.addEventListener('click',function(event){
    if(event.target.tagName === 'LI'){
        loadSong(event.target.innerText);
    }
});

document.getElementById('filePicker').addEventListener('change',function(event){
    let files = event.target.files;
    let list = document.getElementById('track-list');
    for (let i = 0; i<files.length; i++){
        let songName = document.createElement('li');
        songName.innerText = getFileName(files[i].webkitRelativePath);
        console.log(files[i].webkitRelativePath)
        // songName.setAttribute('onclick', 'loadSong()')
        list.appendChild(songName);
    }
});

function getFileName(name){
    let songNameIndex = name.lastIndexOf('/');
    DIR_PATH = name.slice(0,songNameIndex+1);
    console.log(DIR_PATH)
    songName = name.slice(songNameIndex+1, name.length);
    songList.push(songName);
    return songName;
}

