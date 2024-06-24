"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    if (typeof val === "number") {
        return val + 2;
    }
    return true;
}
function provideId(id) {
    if (!id) {
        throw new Error("Id is required.");
        return;
    }
    id.toLowerCase();
}
function padLeft(str) {
    if (str) {
        if (typeof str === "object") {
            for (const s of str) {
                console.log(s);
            }
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
}
