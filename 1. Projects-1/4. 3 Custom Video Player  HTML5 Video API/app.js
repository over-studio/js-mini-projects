const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timeStamp');

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('click', setVideoProgress);


function toggleVideoStatus(e) {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function updatePlayIcon(e) {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

function updateProgress(e) {
	progress.value = (video.currentTime / video.duration) * 100;

	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = "0" + mins;
	}

	let secs = Math.floor(video.currentTime % 60);
	if (secs < 10) {
		secs = "0" + secs;
	}
	
	timeStamp.textContent = mins + ":" + secs;
}

function stopVideo(e) {
	video.currentTime = 0;
	video.pause();
}

function setVideoProgress(e) {
	video.currentTime = (+progress.value * video.duration) / 100;
}
