import exp from "constants";
import {add} from "../src/calc";
import {sub} from "../src/calc";

describe ("test add function", () =>{
    it("should return 15 for add(10,5)", ()=> {
        expect(add(10,5)).toBe(15);
    });
    it ("should return 5 for add(2,3)", ()=> {
        expect (add(2,3)).toBe(5);
    });
})

describe ("test subtraction function", ()=> {
    it("should return 10 for sub(10, 5)", () => {
        expect(sub(10, 5)).toBe(5);
    });

    it ("should return 24 for sub(29,5)", () => {
        expect(sub(29,5)).toBe(24);
    });
});