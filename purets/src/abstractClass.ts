abstract class TakePhoto {
    constructor(
       public cameraMode: string,
       public imageSize: string
    ){}

    abstract getSepia(): void
    getRealTime(): number{
        //some complex calculations;
        return 1000;
    }
}

class InstagramApp extends TakePhoto {
     constructor(
         public cameraMode: string,
         public imageSize: string
     ){
       super(cameraMode, imageSize)
     }

    getSepia(): void{
        console.log("Sepia is running here!")
    }

}

let sourov = new InstagramApp("test", "test");
sourov.getRealTime();