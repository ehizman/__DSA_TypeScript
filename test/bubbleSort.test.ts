import {optimizedBubbleSort} from "../src/arrays/optimizedBubbleSort";

test("test bubble sort", ()=> {
    let array: number[] = [15,1,5,8,9,10,2,50,40];
    optimizedBubbleSort(array);
    expect(array).toEqual([1,2,5,8,9,10,15,40,50])
})