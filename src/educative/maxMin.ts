export function minMax(_array: number[]): void{
    let count = 0;
    let length:number = Math.floor(_array.length/2);

    function rightShift(_array: number[], count: number) {
        for (let i = _array.length-2; i >= count; i--) {
            _array[i+1] = _array[i];
        }
    }

    for (let i = 0; i < length; i++) {
        let temp = _array[_array.length-1];
        rightShift(_array, count)
        _array[count] = temp;
        count= count + 2;
    }
}