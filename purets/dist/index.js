"use strict";
// most professional people dont recomend this method for performance reasons and should insteed this method below;
//  class User {
//     email: string
//     name: string
//     city?: string
//     constructor(email: string, name: string){
//         this.email = email
//         this.name =  name
//     }
//  }
//  const newUser = new User("John@gmail.com", "John")
//  const userCity = newUser.city = "Dhaka";
// experienced developer prefer using bleow this method;
class User {
    constructor(email, name, city = "", userId) {
        this.email = email;
        this.name = name;
        this.city = city;
        this.userId = userId;
        this._courseCount = 1;
    }
    //crated a private function ;
    deleteToken() {
        console.log("token deleted");
    }
    get getUserName() {
        return `User name is ${this.name}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more  then one");
        }
        this._courseCount = courseNum;
    }
}
// new class with extend;
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    chagneCouseCount() {
        this._courseCount = 4;
    }
}
const newUser = new User("johne@gmail.com", "John", "dhaka");
