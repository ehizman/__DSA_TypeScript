let max = 0;
let resultStart = 0;
export function findLongestPalindromeSubstring(str: string): string{
    function expandRange(str: string, start: number, end: number) {
        while(str.charAt(start)===str.charAt(end) && start >= 0
        && end < str.length){
            start--;
            end++;
        }
        if (max < end-start+1){
            resultStart = start+1;
            max = end-start-1;
        }
    }

    let strLength: number = str.length;
    if (strLength < 2){
       return str;
    }

    for (let i = 0; i < strLength-1; i++) {
        expandRange(str, i, i)
        expandRange(str, i, i+1)
    }
    return str.substring(resultStart, resultStart+max)
}