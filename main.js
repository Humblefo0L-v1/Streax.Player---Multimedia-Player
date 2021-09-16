window.onload = () => {

    // Constant Declarations
    const plrContainer = document.getElementById('m_player-container');
    const prevBtn = document.getElementById('prev');
    const playBtn = document.getElementById('play');
    const nxtBtn = document.getElementById('next')
    const audio_plyr= document.getElementById('play-music');
    const progress = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-bar');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const cover = document.getElementById('song-cover');
    const currTime = document.querySelector('#currTime');
    const durTime = document.querySelector('#durTime');

    let curSongIndex;
    let nxtSongIndex;

    let songs = [
        {
            song_title: 'Walk Through Life',
            song_artist: 'Pinkzebra, Benji Jackson',
            song_path: 'Assets/songs/walk-through-life-upbeat-energetic-song_by_pinkzebra.mp3',
            cover_path: 'Assets/song_covers/walkthroughlife.jpg'
        },
        {
            song_title: 'Seasons',
            song_artist: 'Rival x Cadmium',
            song_path: 'Assets/songs/Rival x Cadmium - Seasons (feat. Harley Bird) [NCS Release].mp3',
            cover_path: 'Assets/song_covers/seasons.jpg'
        },
        {
            song_title: 'Be With You',
            song_artist: 'Rival, Grant Dawson',
            song_path: 'Assets/songs/Cadmium - Be With You (feat. Grant Dawson) [NCS Release].mp3',
            cover_path: 'Assets/song_covers/Be with you.jpg'
        },
        {
            song_title: 'Dreams',
            song_artist: 'Lost Sky, Sara Skinner',
            song_path: 'Assets/songs/Lost Sky - Dreams pt. II (feat. Sara Skinner) [NCS Release].mp3',
            cover_path: 'Assets/song_covers/dreams.jpg'
        },
    ]

    playBtn.addEventListener('click', TogglePlaySong);
    nxtBtn.addEventListener('click', () => ChangeSong());
    prevBtn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer(){
        curSongIndex = 0;
        nxtSongIndex = curSongIndex + 1;
        UpdatePlayer();
    }

    function UpdatePlayer(){
        
        let song = songs[curSongIndex];

        cover.src = song.cover_path;
        title.innerText = song.song_title;
        artist.innerText = song.song_artist;
        audio_plyr.src = song.song_path;
    }

    function TogglePlaySong(){
        if(audio_plyr.paused){
            audio_plyr.play();
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
        }else{
            audio_plyr.pause();
            playBtn.classList.add('fa-play');
            playBtn.classList.remove('fa-pause');
        }
    }

    function ChangeSong(){
        if (next) {
            curSongIndex++;
            nxtSongIndex = curSongIndex + 1;
            if (curSongIndex > (songs.length - 1)) {
                curSongIndex = 0;
                nxtSongIndex = curSongIndex + 1;
            }
            if (nxtSongIndex > (songs.length - 1)) {
                nxtSongIndex = 0;
            }
        } else{
            curSongIndex--;
            nxtSongIndex = curSongIndex + 1;

            if (curSongIndex < 0) {
                curSongIndex = songs.length - 1;
                nxtSongIndex = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }
        
    
}

//jsMediaTags library
// var jsmediatags = window.jsmediatags;

// document.querySelector("#input").addEventListener("change", (event) => {
//     const file = event.target.files[0];

//     jsmediatags.read(file, {
//         onSuccess: function(tag){
//             const data = tag.tags.picture.data;
//             const format = tag.tags.picture.format;
//             let base64string = "";

//             for (let i = 0; i < data.length; i++) {
//                 base64string += String.fromCharCode(data[i]);    
//             }
//             document.querySelector("#song-cover").style.backgroundImage = `url(
//                 data: ${format};
//                 base64,
//                 ${window.btoa(base64string)}
//             )`;
//             document.querySelector("#title").textContent = tag.tags.title;
//             document.querySelector("#artist").textContent = tag.tags.artist;
//         },
//         onError: function(error){
//             console.log(error);
//         }
//     })
// })