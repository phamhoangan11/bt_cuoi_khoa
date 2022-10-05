const music = new Audio('Ave-Maria-Con-Dang-Loi-Luu-Anh-Loan-Vu-Hoang.mp3');

//create Array

const songs = [
    {
        id: '1',
        songName: `Ave-Maria <br>
        <div class="header__menu_song-songItem__singer">Lưu Ánh Loan, Vũ Hoàng</div>`,
        poster: "./asset/img/songs/Ave-Maria.jpg",
        path: "./asset/music/Ave-Maria-Con-Dang-Loi-Luu-Anh-Loan-Vu-Hoang.mp3",
    },
    {
        id: '2',
        songName: `Ba vua đăng trình <br>
        <div class="header__menu_song-songItem__singer">Gia Ân</div>`,
        poster: "./asset/img/songs/Ba-vua-dang-trinh.jpg",
        path: "./asset/music/Ba-vua-dang-trinh-Gia-An.mp3",
    },
    {
        id: '3',
        songName: `Bài ca ngàn trùng <br>
        <div class="header__menu_song-songItem__singer">Ca đoàn Sao Mai</div>`,
        poster: "./asset/img/songs/Bai-ca-ngan-trung.jpg",
        path: "./asset/music/BaiCaNganTrung-CaDoanSaoMai-2554135.mp3",
    },
    {
        id: '4',
        songName: `Bài ca nhân chứng <br>
        <div class="header__menu_song-songItem__singer">Hòa Tấu</div>`,
        path: "./asset/music/BaiCaNhanChung-HoaTau-3217670.mp3",
        poster: "./asset/img/songs/Bai-ca-nhan-chung.jpg",
    },
    {
        id: '5',
        songName: `Bao la tình Chúa <br>
        <div class="header__menu_song-songItem__singer">Gia Ân</div>`,
        path: "./asset/music/BaolatinhChua-GiaAn_bpam.mp3",
        poster: "./asset/img/songs/Bao-la-tinh-chua.jpg"
    },
    {
        id: '6',
        songName: `Bỏ ngài con theo ai <br>
        <div class="header__menu_song-songItem__singer">Phan Đình Tùng</div>`,
        path: "./asset/music/Bo-Ngai-Con-Theo-Ai-Phan-Dinh-Tung.mp3",
        poster: "./asset/img/songs/Bo-ngai-con-biet-theo-ai.jpg"
    },
    {
        id: '7',
        songName: `Bông hồng dâng mẹ <br>
        <div class="header__menu_song-songItem__singer">Mai Thiên Văn</div>`,
        path: "./asset/music/BongHongDangMe-MaiThienVan-3144971.mp3",
        poster: "./asset/img/songs/Bong-hong-dang-Me.jpg"
    },
    {
        id: '8',
        songName: `Ca khúc trầm hương <br>
        <div class="header__menu_song-songItem__singer">Nguyễn Sang</div>`,
        path: "./asset/music/CaKhucTramHuong-LmJBNguyenSang-266796_hq.mp3",
        poster: "./asset/img/songs/Chinh-Chua-chon-con.jpg"
    },
    {
        id: '9',
        songName: `Cao cung lên <br>
        <div class="header__menu_song-songItem__singer">Nguyễn Sang</div>`,
        path: "./asset/music/Cao-Cung-Len-Lm-JB-Nguyen-Sang.mp3",
        poster: "./asset/img/songs/Cao-cung-len.jpg"
    },
    {
        id: '10',
        songName: `Cầu cho cha mẹ <br>
        <div class="header__menu_song-songItem__singer">Sky Nguyễn</div>`,
        path: "./asset/music/Cau-Cho-Cha-Me-Sky-Nguyen.mp3",
        poster: "./asset/img/songs/Cau-cho-cha-me.jpg"
    },
    {
        id: '11',
        songName: `Cầu cho cha mẹ 1 <br>
        <div class="header__menu_song-songItem__singer">Như Mai</div>`,
        path: "./asset/music/CauChoChaMe1-NhuMai_3xqf5.mp3",
        poster: "./asset/img/songs/Cau-cho-cha-me1.jpg"
    },
    {
        id: '12',
        songName: `Cầu xin Thánh Gia <br>
        <div class="header__menu_song-songItem__singer">Vân Anh</div>`,
        path: "./asset/music/CauXinThanhGia-V.A-2522587.mp3",
        poster: "./asset/img/songs/Cau-xin-thanh-gia.jpg"
    },
    {
        id: '13',
        songName: `Chính Chúa chọn con <br>
        <div class="header__menu_song-songItem__singer">Hoàng Thy</div>`,
        path: "./asset/music/ChinhChuaChonCon-HoangThy-5048231_hq.mp3",
        poster: "./asset/img/songs/Chinh-Chua-chon-con.jpg"
    },
];

const menuSongItem = document.getElementsByClassName('header__menu_song-songItem');
const menuSongItemNumber = document.getElementsByClassName('header__menu_song-songItem__number');
const sideSongItem = document.getElementsByClassName('header__song_side-song-songItem');
Array.from(menuSongItem).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

Array.from(sideSongItem).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('header__master-play');
let wave = document.getElementsByClassName('header__master_play-wave')[0];
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }

})


let playListPlay = document.getElementsByClassName('playListPlay');
let header__master_playImg = document.getElementById('header__master_play-img');
let header__master_playName = document.getElementById('header__master_play-name');

const makeAllPlay = () => {
    Array.from(playListPlay).forEach((element) => {
        element.classList.add('bi-play-circle');
        element.classList.remove('bi-pause-circle');
    })
}

const makeAllPopular = () => {
    Array.from(sideSongItem).forEach((element) => {
        element.classList.add('bi-play-circle');
        element.classList.remove('bi-pause-circle');
    })
}

Array.from(sideSongItem).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        music.src = songs[i].path;
        header__master_playImg.src = songs[i].poster;
        header__master_playName.innerHTML = songs[i].songName;
        music.play();
    })
})

Array.from(playListPlay).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');
        music.src = songs[i].path;
        header__master_playImg.src = songs[i].poster;
        header__master_playName.innerHTML = songs[i].songName;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
            element.classList.add('bi-play-circle');
            element.classList.remove('bi-pause-circle');
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
    })
})



let currentStart = document.getElementById('header__master_play__currentStart');
let currentEnd = document.getElementById('header__master_play__currentEnd');
let seek = document.getElementById('header__master_play__seek');
let barRun = document.getElementById('header__master_play-bar__run');
let barDot = document.getElementsByClassName('header__master_play-bar__dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    if (music.duration) {
        const progressPercent = Math.floor(
            (music.currentTime / music.duration) * 100)
        seek.value = progressPercent
        let seekbar = seek.value;
        barRun.style.width = `${seekbar}%`;
        barDot.style.left = `${seekbar}%`;
    }
})

seek.addEventListener('change', () => {
    music.currentTime = (music.duration / 100) * seek.value;
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})

let volIcon = document.getElementById('header__master_play-vol_icon');
let vol = document.getElementById('header__master_play__vol');
let volBar = document.getElementsByClassName('header__master_play-vol_bar')[0];
let volDot = document.getElementById('header__master_play-vol_dot');

vol.addEventListener('click', () => {
    if (vol.value == 0) {
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.add('bi-volume-mute-fill')
        volIcon.classList.remove('bi-volume-up-fill')
    }
    if (vol.value > 0) {
        volIcon.classList.add('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-mute-fill')
        volIcon.classList.remove('bi-volume-up-fill')
    }
    if (vol.value > 50) {
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-mute-fill')
        volIcon.classList.add('bi-volume-up-fill')
    }

    let volChange = vol.value;
    volBar.style.width = `${volChange}%`;
    volDot.style.left = `${volChange}%`;
    music.volume = volChange / 100;
})

let indexCurrentSong = 0;
let playBack = document.getElementById('playBack');
let playNext = document.getElementById('playNext');

playBack.addEventListener('click', () => {
    indexCurrentSong--;
    if (indexCurrentSong < 0) {
        indexCurrentSong = Array.from(menuSongItem).length - 1;
    }
    console.log(indexCurrentSong);
    music.src = songs[indexCurrentSong].path;
    header__master_playImg.src = songs[indexCurrentSong].poster;
    header__master_playName.innerHTML = songs[indexCurrentSong].songName;
    music.play();
    makeAllPlay();
    wave.classList.add('active2');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
})


playNext.addEventListener('click', () => {
    indexCurrentSong++;
    if (indexCurrentSong >= Array.from(menuSongItem).length) {
        indexCurrentSong = 0;
    }
    console.log(indexCurrentSong);
    music.src = songs[indexCurrentSong].path;
    header__master_playImg.src = songs[indexCurrentSong].poster;
    header__master_playName.innerHTML = songs[indexCurrentSong].songName;
    // music.loadCurrentSong();
    music.play();
    makeAllPlay();
    wave.classList.add('active2');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
})

let leftScroll = document.getElementById('left_scroll');
let rightScroll = document.getElementById('right_scroll');
let popSong = document.getElementsByClassName('header__song_side-song-lists')[0];

leftScroll.addEventListener('click', () => {
    popSong.scrollLeft -= 330;
})

rightScroll.addEventListener('click', () => {
    popSong.scrollLeft += 330;
})
