import {findMedian} from "./medianOfTwoSortedArrays";

test("can return median of two sorted arrays", ()=>{
    let arrayOne: number[] = [1,2];
    let arrayTwo: number[] = [3,4];
    let median: number = findMedian(arrayOne, arrayTwo);
    expect(median).toEqual(2.5)
})