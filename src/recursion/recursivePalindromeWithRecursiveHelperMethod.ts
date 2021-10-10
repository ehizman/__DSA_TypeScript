function _palindrome(s: string): boolean {
    function palindromeHelper(s: string, low: number, high: number): boolean {
        if(high <= low){
            return true;
        }
        else{
            if(s.charAt(low) != s.charAt(high)){
                return false;
            }
            else{
                return palindromeHelper(s, low+1, high-1);
            }
        }
    }
    return palindromeHelper(s, 0, s.length-1);
}

let isPalindrome: boolean = _palindrome("tadat");
console.log(isPalindrome);