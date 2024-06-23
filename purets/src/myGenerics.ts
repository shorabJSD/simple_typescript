// Initialize an empty array to store numerical scores
const score: Array<number> = [];

// Initialize an empty array to store names as strings
const names: Array<string> = [];

/**
 * A function that returns the input value.
 * It can handle both boolean and number types.
 * @param val - The value to be returned. It can be either a boolean or a number.
 * @returns The input value as either a boolean or a number.
 */
function indentity(val: boolean | number): boolean | number {
    return val;
}

/**
 * A function that returns the input value.
 * It uses the 'any' type, allowing it to handle any type of input.
 * @param val - The value to be returned. It can be of any type.
 * @returns The input value of any type.
 */
function indentity2(val: any): any {
    return val;
}

/**
 * A generic function that returns the input value.
 * It uses a type parameter 'type' to ensure type safety.
 * @param val - The value to be returned. The type is specified when the function is called.
 * @returns The input value of the specified type.
 */
function indentity3<Type>(val: Type): Type {
    return val;
}
// Call the generic function with a boolean value
indentity3(123);

function identityFour<T>(val:T):T{
    return val;
}

interface Bottle{
    color: string,
    type:string
}
identityFour<Bottle>({ color: "Red", type:"Fresh water"});
 

function getSearchProducts<T>(products: T[]): T{
    //do some database operations;
    const indexNum = 12;
    return products[indexNum];
}


const getMoreProducts = <T,> (product: T[]):T =>{
      // do some database operations;
      const indexId = 56;
      return product[indexId];
}





interface Database{
        connections: string,
        userName: string,
        password: string
}
function anotherFunction<T, U extends Database>(valueOne: T, valueTwo: U ): object{
    return{
          valueOne, 
          valueTwo
    }
}

anotherFunction(2, {connections: "sjdofjowej", userName: "sourovakka", password: "dofjoeiiwe"});




interface Quize{
       name: string,
       type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}


class Sellable<T>{
      public cart: T[] = []
      addToCart(product: T){
        this.cart.push(product);
      }
}

