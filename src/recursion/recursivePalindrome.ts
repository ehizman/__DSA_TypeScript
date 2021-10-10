function palindrome(s: string) {
    if (!(s.length < 2)){
        if (s.charAt(0) != s.charAt(s.length-1)){
            return false;
        }
        else{
            palindrome(s.substring(1, s.length-1));
        }
    }
    return true;
}

let result: boolean = palindrome("mom");
console.log(result)

function palindromeWithSentinel(s: string) {
    let i: number = 0;
    while(i < s.length/2){
        if (s.charAt(i) != s.charAt(s.length-1-i)){
            return false;
        }
        else{
            i++;
        }
    }
    return true;
}

let resultTwo: boolean = palindromeWithSentinel("mummy");
console.log(resultTwo);

