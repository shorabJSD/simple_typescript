interface User {
    readonly bdId: number
    userName: string
    userId: number
    googleId?: string
    // startTrail: ()=>string
    startTrail():number // it can be return anything else in the list of users;
    getCoupon(couponname: string, value: number): number // it can be return anything else in the list of users
    //couponname: string, value: number // it can be return anything else in the list of getCoupon methods for the user to get the coupon information from the user and the user should be able to get the coupon information from the user;
}

// create a new coupon information object basis on the User object and get back before which we have assinged valuee in the newUser object;
interface User {
    gitHubToken: string
}

//  create admin user object
interface Admin extends User {
    role: "admin" | "ta"  | "learner"
}


//assing values according above to the User object;
const newUser: Admin ={
    bdId:2211, // you cant change the bdId here because the user is already in the process of creating a new user.
    gitHubToken: "world is a battle ground for everyone ",
    userName: "sourov",
    role: "admin",
    userId: 123,
    startTrail: ()=>{
        return 12
    },
    getCoupon:(couponname:"shorab", value: 252)=>{
        return 25
    }
}

newUser.userName = "akka";
newUser.userId = 45;