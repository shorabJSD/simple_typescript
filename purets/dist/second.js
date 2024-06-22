"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, veido) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.veido = veido;
    }
    createStory() {
        console.log("Story was created by developer ");
    }
}
