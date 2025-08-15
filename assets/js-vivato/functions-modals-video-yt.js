
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {

        const playerContainer = document.getElementById('player');
        playerContainer.style.width = '100%';
        playerContainer.style.height = '56.25vw'; 
        playerContainer.style.maxHeight = '500px'; 


        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: pdVideoId,
            playerVars: {
            'playsinline': 1
            },
            events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        // hide loading icon
        const loadingIcon = document.getElementsByClassName('pd-loading-icon')[0];
        loadingIcon.classList.add('pd-hide');
        event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {

    }
    function stopVideo() {
        player.stopVideo();
    }

