import {Right_rotate_the_array_by_one_index} from "../src/arrays/right_rotate_the_array_by_one_index"
test("last element in array becomes the first element", ()=>{
   let array: number[] = [1,2,3,4,5];
   const rotate: Right_rotate_the_array_by_one_index = new Right_rotate_the_array_by_one_index(array);
   rotate.rotateArray();
   expect(5).toEqual(rotate.getArray[0]);
});