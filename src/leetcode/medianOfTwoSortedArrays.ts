export function findMedian(arrayOne: number[], arrayTwo: number[]): number{
    let newArray: number[] = arrayOne.concat(arrayTwo).sort();
    if (newArray.length % 2 === 0){
        return (newArray[Math.floor(newArray.length / 2)] + newArray[Math.floor(newArray.length/2) - 1])/2;
    }
    return newArray[Math.floor(newArray.length/2)]
}