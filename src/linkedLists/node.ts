export class _Node{
    private _data: number;
    private _nextNode: _Node| null;

    constructor(data: number){
        this._data = data;
        this._nextNode = null;
    }

    get data(){
        return this._data;
    }

    set data(newData: number){
        this._data = newData;
    }

    set setNextNode(nextNode: _Node){
        this._nextNode = nextNode;
    }

    get nextNode(){
        return this._nextNode;
    }
}