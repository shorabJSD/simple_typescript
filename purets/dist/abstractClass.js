"use strict";
class TakePhoto {
    constructor(cameraMode, imageSize) {
        this.cameraMode = cameraMode;
        this.imageSize = imageSize;
    }
    getRealTime() {
        //some complex calculations;
        return 1000;
    }
}
class InstagramApp extends TakePhoto {
    constructor(cameraMode, imageSize) {
        super(cameraMode, imageSize);
        this.cameraMode = cameraMode;
        this.imageSize = imageSize;
    }
    getSepia() {
        console.log("Sepia is running here!");
    }
}
let sourov = new InstagramApp("test", "test");
sourov.getRealTime();
