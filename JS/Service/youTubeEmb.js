var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var control = document.getElementsByTagName('script')[0];
control.parentNode.insertBefore(tag, control);

var player;
var player2;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytPlayer', {
        height: '100%',
        width: '100%',
        videoId: 'pixYemGJFRo',
        playerVars: { 'autoplay': 1, 'controls': 1, 'mute': 1 ,playlist: 'pixYemGJFRo,PjMScZCVwJE'},
        events: {
            'onReady': onPlayerReady
        }
    });

    player2 = new YT.Player('ytPlayer2', {
        height: '100%',
        width: '100%',
        videoId: 'ly6iHqSxug4',
        playerVars: { 'autoplay': 1, 'controls': 1, 'mute': 1 },
        events: {
            'onReady': onPlayerReady2
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(100);
    event.target.playVideo();
    
}

function onPlayerReady2(event) {
    event.target.setVolume(100);
    event.target.playVideo();
}

