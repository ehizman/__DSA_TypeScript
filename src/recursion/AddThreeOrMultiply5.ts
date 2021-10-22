function findSolution(target: number):string {
    function find(number1: number, history: string): string {
        console.log(number1)
        if (number1 === target){
            return history;
        }
        else{
            if (number1 > target){
                return ''
            }
            else{
                return (find(number1 * 3, `(${history} * 3)`)
                    || find(number1 + 5, `(${history} + 5)`));
            }
        }
    }

    return find(1, "1");
}

console.log(findSolution(13));