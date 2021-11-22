export function findMedian(nums1: number[], nums2: number[]): number{
    let combinedArray: number[] = (nums1.concat(nums2));
    function swap(combinedArray: number[], i: number, j: number) {
        let temp = combinedArray[i];
        combinedArray[i] = combinedArray[j];
        combinedArray[j] = temp;
    }

    function sort(combinedArray: number[]) {
        for (let i = 0; i < combinedArray.length-1; i++) {
            for (let j = i+1; j < combinedArray.length; j++) {
                if (combinedArray[i] > combinedArray[j]){
                    swap(combinedArray, i, j);
                }
            }
        }
    }

    sort(combinedArray);
    if (combinedArray.length%2===1){
        return (combinedArray[Math.floor(combinedArray.length/2)])
    }
    else{
        return (combinedArray[Math.floor(combinedArray.length/2)] + combinedArray[Math.floor(combinedArray.length/2)-1])/2
    }
}