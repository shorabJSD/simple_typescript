function detectType(val: number | string | boolean){
    if(typeof val=== "string"){
        return val.toLowerCase();
    }
    if(typeof val === "number"){
        return val +  2;
    }
    return true;
}

function provideId(id: string | null){
         if(!id){
            throw new Error("Id is required.")
            return;
         }
         id.toLowerCase()
}


function padLeft(str: string | string[] | null){
         if(str){
            if(typeof str === "object"){
                for(const s of str){
                    console.log(s)
                }
            }
         }else if(typeof str === "string"){
             console.log(str)
         }
}




//interface Object extends;
interface User{
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}


//narrow in
function getAdmin(user: User | Admin){
    if("isAdmin" in user){
        return user.isAdmin;
    }else{
        return user.name;
    }
}

//instanceof
function logValue(x: Date | string){
     if(x instanceof Date){
        console.log(x.toUTCString());
     }
     return x.toString();
}





//Using type predicates

document.addEventListener("click", (event: MouseEvent): void=>{
    console.log(event)
})





type Fish = {swim: ()=> void};
type Bird = {fly: ()=> void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}


function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "Fish";
    }else{
        pet
        return "Bird";
    }
}



// 
interface Circle{
    kind: "Circle";
    radius: number;
}

interface Square {
    kind: "Square";
    side: number
}

interface Rectangle{
    kind: "Rectangle";
    length: number;
    width: number;
}


type Shape = Circle | Square| Rectangle ;

function getTrueShape(shape: Shape){
    if(shape.kind === "Circle"){
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}



function getArea(shape: Shape){
    switch(shape.kind){
        case "Circle":
            return Math.PI * shape.radius * 2
        case "Square":
            return shape.side * shape.side
        case "Rectangle":
              return shape.length * shape.width

        default: 
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
}