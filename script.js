const defaultUrl = 'https://9d20a36.r8.cpolar.top/live/movie.flv';
var currentUrl = defaultUrl;
dp = new DPlayer({
    container: document.getElementById('dplayer'),
    live: true,
    autoplay: true,
    clickToPause: false,
    /*danmaku: true,
    apiBackend: {
        read: function (options) {
            console.log('Pretend to connect WebSocket');
            options.success([]);
        },
        send: function (options) {
         console.log('Pretend to send danmaku via WebSocket', options.data);
         options.success();
        },
    },*/
    video: {
          type: 'auto',
          url: defaultUrl,
    },
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reset').addEventListener('click', function () {
		dp.pause();
		dp.destroy();
		dp = new DPlayer({
			container: document.getElementById('dplayer'),
			live: true,
			autoplay: true,
			clickToPause: false,
			video: {
				type: 'auto',
				url: defaultUrl,
			},
		});
    });
    document.getElementById('reset_url').addEventListener('click', function() {
        document.getElementById('url-dialog').showModal();
        document.getElementById('video-url').value = currentUrl;
    });
    document.getElementById('url-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var newUrl = document.getElementById('video-url').value;
		dp.pause();
		dp.destroy();
		dp = new DPlayer({
			container: document.getElementById('dplayer'),
			live: true,
			autoplay: true,
			clickToPause: false,
			video: {
				type: 'auto',
				url: newUrl,
			},
		});
        currentUrl = newUrl;
        document.getElementById('url-dialog').close();
    });
    document.getElementById('restore-default').addEventListener('click', function() {
        document.getElementById('video-url').value = defaultUrl;
    });
    document.getElementById('close-dialog').addEventListener('click', function() {
        document.getElementById('url-dialog').close();
    });
});
