import Vimeo from '@vimeo/player';
import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

//Declaring throttle as a variable to use later//
const throttler = _.throttle;
// Records video playback time to local storage//
function savePlaybackTime(time) {
  localStorage.setItem('videoplayer-current-time', time);
}

//Retrieves video playack time from local storage//
function getPlaybackTime() {
  return localStorage.getItem('videoplayer-current-time');
}
//Start Player//
function startPlayback() {
  player.play();
}
// Checks if player was played before and sets current time of player //
// to last time played if it was//
function returnLastPlayback() {
  let lastPlayback = getPlaybackTime();

  if (lastPlayback) {
    player.setCurrentTime(parseFloat(getPlaybackTime()));
    document.addEventListener(
      'click',
      function () {
        startPlayback();
      },
      { once: true }
    );
  } else {
    document.addEventListener(
      'click',
      function () {
        startPlayback();
      },
      { once: true }
    );
  }
}

// Gets Video Title and adds title key:value pair to console//
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//Plays video and logs update to console//
player.on('play', function () {
  console.log('played the video!');
});

// Updates time value to most recent time and saves to local storage//
player.on(
  'timeupdate',
  throttler(function (data) {
    const mostRecentTime = data.seconds;

    savePlaybackTime(mostRecentTime);
  }, 1000)
);
window.addEventListener('load', returnLastPlayback);
