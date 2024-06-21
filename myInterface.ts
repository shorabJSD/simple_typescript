interface User {
    readonly bdId: number
    userName: string
    userId: number
    googleId?: string
    // startTrail: ()=>string
    startTrail():number // it can be return anything else in the list of users;
    getCoupon(couponname: string, value: number): number // it can be return anything else in the list of users
}

//assing values according above to the User object;
const newUser: User = {
    bdId:2211, // you cant change the bdId here because the user is already in the process of creating a new user.
    userName: "sourov",
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