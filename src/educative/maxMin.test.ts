import {minMax} from "./maxMin";

test("return the minmax of the array", ()=>{
    let _array: number[] = [1,2,3,4,5,6,7]
    minMax(_array)
    expect(_array).toStrictEqual([7,1,6,2,5,3,4])
})