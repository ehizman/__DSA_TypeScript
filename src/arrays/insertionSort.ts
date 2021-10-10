export function insertionSort(array: number[]){
    function swap(array: number[], i: number, benchmarkOfSorted: number) {
        let temp: number = array[i];
        array[i] = array[benchmarkOfSorted];
        array[benchmarkOfSorted] = temp;
    }

    for (let i = 1; i < array.length; i++) {
        let benchmark: number = i-1;
        let key: number = array[i];
        while(benchmark >= 0 && key < array[benchmark]){
            array[benchmark+1]  = array[benchmark]
            benchmark--;
        }
        array[benchmark+1] = key;
    }
}
let array: number[] = [9, 5, 1, 4, 3];
insertionSort(array);
console.log(array);