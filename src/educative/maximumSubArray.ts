export function findMaxSubArray(_array: number[]): number{
    let count = 0
    let maximum = Number.MIN_SAFE_INTEGER;

    function calculateSum(numbers: number[]) {
        let sum = 0;
        numbers.forEach(element=>{
            sum = sum + element;
        })
        return sum;
    }

    while(count < _array.length){
        let sum = calculateSum(_array.slice(0, count+1))
        if (sum > maximum){
            maximum = sum;
        }
        count = count + 1;
    }
    return maximum;
}