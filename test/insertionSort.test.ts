import {insertionSort} from "../src/arrays/insertionSort";

test("test insertion sort", ()=> {
    let array: number[] =  [9, 5, 1, 4, 3];
    insertionSort(array);
    expect(array).toEqual([1,3,4,5,9]);
})