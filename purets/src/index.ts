 
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
    
    protected _courseCount = 1;

    constructor(
        public email: string, 
        public name: string,
        public city: string = "",
        private readonly userId?: number,
    ){
        
    }
     //crated a private function ;
      private deleteToken(){
        console.log("token deleted");
     }


     get getUserName(): string{
        return `User name is ${this.name}`
     }
     get courseCount(): number{
        return this._courseCount
     }

     set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("course count should be more  then one")
        }
        this._courseCount = courseNum;
     }
     
    }
    

// new class with extend;

class SubUser extends User {
    isFamily: boolean = true;
    chagneCouseCount(){
        this._courseCount = 4
    }
}
     













 const newUser = new User("johne@gmail.com", "John", "dhaka");
  
 