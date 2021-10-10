import { _Node } from "./node";

export class LinkedList<T>{
    private head: _Node | null;
    private tail: _Node | null;
    private count: number = 0;

    constructor(node?: _Node){
        this.head = node || null;
        this.tail = node || null;
        if (node != null){
            this.count++;
        }
    }

    add(node: _Node):void{
        if (this.head === null){
            this.head = node;
            this.tail = node;
        }
        else{
            if (this.tail !== null){
                this.tail.setNextNode = node;
                this.tail = node;
            }
        }
        this.count++;
    }

    get getHead():_Node|null{
        return this.head;
    }

    get getTail(): _Node|null{
        return this.tail;
    }

    get getCount(): number{
        return this.count;
    }

    remove(dataToRemove: T){
        let previous: any = null;
        let currentNode: _Node|null = this.head;

         while(currentNode != null){
            if (currentNode.data === dataToRemove as unknown as number){
                if (currentNode === this.head){
                    this.head = null;
                    this.tail = null;
                }
                
                if(currentNode.nextNode === null){
                    this.tail = previous;
                } 

                if (previous != null){
                    previous.setNextNode = currentNode.nextNode;
                }
                else{
                    this.head = currentNode.nextNode;
                }
                this.count--;
                return true;
            }
            else{
                 previous = currentNode;
                 currentNode = currentNode.nextNode;
            }
         }
    }
}