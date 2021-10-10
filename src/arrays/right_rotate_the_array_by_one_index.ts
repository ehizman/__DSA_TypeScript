export class Right_rotate_the_array_by_one_index{
    private readonly array: number[] = [];

    constructor(arrayToRotate: number[]) {
        this.array = arrayToRotate;
    }
    rotateArray(): void{
        console.log(this.array);
        let temp = this.array[this.array.length-1];

        for (let i = this.array.length-2; i >= 0; i--) {
            this.array[i+1]=this.array[i];
        }
        this.array[0] = temp;
        console.log(this.array);
    }
    get getArray(){
        return this.array;
    }
}