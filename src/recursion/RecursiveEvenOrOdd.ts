export class RecursiveEvenOrOdd{
    static evenOrOdd(_number: number): string{
        if(_number === 1){
            return 'odd'
        }
        else{
            if (_number === 0){
                return 'even'
            }
            else{
                return (this.evenOrOdd(_number-2));
            }
        }
    }
}