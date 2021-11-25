import {findLongestPalindromeSubstring} from "./LongestPalindrome";

test("find the longest palindrome substring  in a string", ()=>{
        let str: string = "cbbd";
        let longestPalindromeSubstring = findLongestPalindromeSubstring(str);
        expect(longestPalindromeSubstring).toEqual("bb")
})