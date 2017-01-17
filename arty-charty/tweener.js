class Tweener {
    constructor(duration, cb, timingFunction, autoStart) {
        this.cb = cb;
        this.timingFunction = timingFunction;

        autoStart === false 
        ? 
            this.setDurationFrom(duration)
        :
            this.setDurationFromNowAndPlay(duration)
        ;
    }

    start() {
        this.playing = true;
        this.play();
    }

    play() {
        this.afid = requestAnimationFrame(timestamp => {
            if (timestamp < this.endTime) {
                let timeLeft = this.endTime - timestamp;
                this.cb(this.timingFunction(1 - timeLeft / this.duration), timeLeft);
                this.play();
            } else {
                this.playing = false;
                this.cb(1, 0);
            }
        });
    }

     setDurationFrom(duration) {
        this.duration = duration;
        this.endTime = duration + Date.now();
    }

    setDurationFromNowAndPlay(duration) {
        this.setDurationFrom(duration);
        this.start();
    }

    resetAndPlay() {
        this.endTime = this.duration + Date.now();
        this.start();
    }

    stop() {
        cancelAnimationFrame(this.afid);
        this.playing = false;
    }

    isPlaying() {
        return this.playing;
    }
}

export default Tweener;