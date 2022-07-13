console.log("Welcome to Javascript")

// Initialise the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let songItems = document.getElementsByClassName('songItems');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songItemPlay = document.getElementsByClassName('songItemPlay');

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"  },
    {songName: "Whatsoever", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"  },
    {songName: "Doesn't matters", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"  },
    {songName: "Issablela", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"  },
    {songName: "khabira", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"  },
    {songName: "higyisq", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"  },
    {songName: "kabiyrasfg", filePath: "songs/7.mp3", coverPath: "cover/7.jpg"  },
    {songName: "mossedlewala", filePath: "songs/8.mp3", coverPath: "cover/8.jpg"  },
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerHTML = Math.floor(audioElement.currentTime/60);
})

// Handle Play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})



// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100
})
 
// songItemPlay.addEventListener('click', ()=>{
//     if( audioElement.paused){
//         // .play();
//         songItemPlay.classList.remove('fa-circle-play');
//         songItemPlay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
//     }
//     else{
//         // audioElement.pause();
//         songItemPlay.classList.remove('fa-circle-pause');
//         songItemPlay.classList.add('fa-circle-play');
//         gif.style.opacity = 0;
//     }
// })

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/3.mp3';
        audioElement.currentTime = 0;  
        audioElement.play();
        masterPlay
    })
})