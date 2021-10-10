export function selectionSort(array: number[]){
    function swap(array: number[], i: number, j: number) {
        let temp: number = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    for (let i = 0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]){
                swap(array, i, j);
            }
        }
    }
}

let array: number[] = [15,1,5,8,9,10,2,50,40];
selectionSort(array);
console.log(array);
