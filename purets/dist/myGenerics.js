"use strict";
// Initialize an empty array to store numerical scores
const score = [];
// Initialize an empty array to store names as strings
const names = [];
/**
 * A function that returns the input value.
 * It can handle both boolean and number types.
 * @param val - The value to be returned. It can be either a boolean or a number.
 * @returns The input value as either a boolean or a number.
 */
function indentity(val) {
    return val;
}
/**
 * A function that returns the input value.
 * It uses the 'any' type, allowing it to handle any type of input.
 * @param val - The value to be returned. It can be of any type.
 * @returns The input value of any type.
 */
function indentity2(val) {
    return val;
}
/**
 * A generic function that returns the input value.
 * It uses a type parameter 'type' to ensure type safety.
 * @param val - The value to be returned. The type is specified when the function is called.
 * @returns The input value of the specified type.
 */
function indentity3(val) {
    return val;
}
// Call the generic function with a boolean value
indentity3(123);
function identityFour(val) {
    return val;
}
identityFour({ color: "Red", type: "Fresh water" });
function getSearchProducts(products) {
    //do some database operations;
    const indexNum = 12;
    return products[indexNum];
}
const getMoreProducts = (product) => {
    // do some database operations;
    const indexId = 56;
    return product[indexId];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
anotherFunction(2, { connections: "sjdofjowej", userName: "sourovakka", password: "dofjoeiiwe" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
