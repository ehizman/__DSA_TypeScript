(function(){
    const array : number[] = [1,8,9,4,32,6,-1,56];
    quickSort(array, 0, array.length-1);
    console.log(array);

    function quickSort(array: number[], low: number, high: number): void{
        if (low < high){
            let pivotIndex: number = partitionTheArray(array, low, high);
            quickSort(array, low, pivotIndex-1);
            quickSort(array, pivotIndex+1, high);
        }
    }

    function partitionTheArray(array: number[], low: number, high: number): number{
        let i: number = low-1;
        let pivot: number = array[high]
        for(let j=low; j <= high-1; j++){
            if (array[j] < pivot){
                i=i+1;
                swap(array, i, j);
            }
        }
        swap(array, i+1, high);
        return i+1;
    }

    function swap(array: number[], i: number, j:number): void{
        let temp: number = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
})();