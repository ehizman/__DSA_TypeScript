function maxSubArray(nums: number[]): number{
    let maximum: number = Number.MIN_VALUE;
    let lengthOfSubArray: number = 0;

    for (let i=0; i < nums.length; i++) {
        lengthOfSubArray += nums[i];
        maximum = Math.max(lengthOfSubArray, maximum);
        if (lengthOfSubArray < 0){
            lengthOfSubArray = 0;
        }
    }
    return maximum;
}

let nums: number[] = [5,4,-1,7,8]
let maximum: number = maxSubArray(nums);
console.log(maximum)