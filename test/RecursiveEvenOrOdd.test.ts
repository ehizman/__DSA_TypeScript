import {RecursiveEvenOrOdd} from "../src/recursion/RecursiveEvenOrOdd";

test("return even or odd- returning even", ()=>{
   let result: string = String(RecursiveEvenOrOdd.evenOrOdd(50));
   expect(result).toBe("even")
});

test("return even or odd-returning odd", ()=>{
   let result: string = String(RecursiveEvenOrOdd.evenOrOdd(75));
   expect(result).toBe("odd")
});