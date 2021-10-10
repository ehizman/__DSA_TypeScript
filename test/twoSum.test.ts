import { solution } from "../src/arrays/twoSum";

test("test two sum solution", ()=> {
    //given
    let array: number[] = [2, 7, 9, 11, 13];
    let target: number = 9;
    //when
    let actual: number[] = solution(array, target);
    let expected: number[] = [0, 1];
    //expect
    expect(actual).toEqual(expected);
    expect(expected).toEqual(actual);
    expect(actual.length === expected.length).toBeTruthy();
});