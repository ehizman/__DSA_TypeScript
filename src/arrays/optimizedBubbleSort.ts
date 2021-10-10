export function optimizedBubbleSort(array: number[]){
    for (let i = 0; i < array.length-1; i++) {
        let swapped: boolean = false
        for (let j = 0; j < array.length-1-i; j++) {
            if (array[j] > array[j+1]){
                let temp: number = array[j];
                array[j] = array[j+1]
                array[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped){
            break;
        }
    }
}
let array: number[] = [15, 1, 5, 8, 9, 10, 2, 50, 40];
optimizedBubbleSort(array)
console.log(array);