type User = {
   readonly _id: string
    name: string
    email: string
    isActive: boolean
    craditeCard?: number
}

let myUser: User = {
    _id:"1",
    name:"shorab",
    email:"shorab@gmail.com",
    isActive:true
}

myUser.email = "shorab@gmail.com";
myUser.name = "shorab";


type cradiCardNumber = {
    cardNumber: number
}

type cardDate = {
    carddate:number
}

type cardDetails = cradiCardNumber & cardDate & {expireDate: number};
 let myCard: cardDetails = {
    cardNumber:123456789,
    carddate:12,
    expireDate:2022
 }
 console.log(myCard)














export{}