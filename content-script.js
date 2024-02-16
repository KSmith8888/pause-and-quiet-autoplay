setTimeout(() => {
    const videoEls = document.querySelectorAll("video");
    const videoArray = [...videoEls];
    videoArray.forEach((video) => {
        video.pause();
        video.volume = 0.5;
    });
}, 750);
