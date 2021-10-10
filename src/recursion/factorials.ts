function factorial(n: number): number{
    let factorial: number = 1;
    while (n > 0){
        factorial *= n;
        n--;
    }
    return factorial;
}
console.log(factorial(5));
