import {findMaxSubArray} from "./maximumSubArray";

test("find the maximum subarray", ()=> {
    let _array: number[] = [1, 7, -2, -5, 10, -1]
    let max: number = findMaxSubArray(_array)
    expect(max).toEqual(11);
})