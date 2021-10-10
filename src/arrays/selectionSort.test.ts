import {selectionSort} from "./selectionSort";

test("selectionSort", ()=> {
    //given
    let array: number[] = [15,1,5,8,9,10,2,50,40];
    //when
    selectionSort(array);
    //expect
    expect(array).toEqual([1,2,5,8,9,10,15,40,50])
})