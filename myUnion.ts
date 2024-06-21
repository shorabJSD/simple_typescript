let score: number | string = 125;
score = 12;
score = "1254"


type User = {
    name: string
    id: number
}

type admin = {
    userName: string
    id: number
}

let user: User | admin = {
    name: "sourov",
    id: 123
}

user = {
    userName: "sourov akka",
    id: 123
}




function getDBId(id: number | string){
    console.log(`DB id is: ${id}`);
}

getDBId("12")


//if there is existing toUpperCase() to make string; how it behaves with string;
function getId(id: number | string){
    if(typeof id === "string"){
       console.log(id.toUpperCase());
    }
}

getId("123")



//Array in nuions;


const data: number[] = [125]
const data2: string[] = ["1", "2", "3", "4", "5", "6"] 
const data3: (number | string | boolean )[] = ["1", "2", "3", "4", 5, 58, 896, true, false]; //instead declear any of specific notation , we can use [any] notation; 


//providing an example of plain tikect anyone who can choose the sit type of their needed.
let seatAllotment: "Aisle" | "Middle" | "Window";

seatAllotment = "Aisle";

// seatAllotment = "Business Class"; you cant change this to your own value here or use the default value  of "Business Class" instead;





