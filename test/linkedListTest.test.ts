    import {LinkedList} from "../src/linkedLists/linkedList"
    import {_Node} from "../src/linkedLists/node"
    test('that first node added is head node', ()=>{
        const list: LinkedList<number> = new LinkedList();
        const firstNode: _Node = new _Node(5);

        list.add(firstNode);
        expect(list.getHead).toBe(firstNode);
        expect(list.getHead?.data).toEqual(5);
    }  
);

test("first node added to list is tail", () =>{
    const list: LinkedList<number> = new LinkedList();
    const node: _Node = new _Node(5);
    list.add(node);

    expect(list.getTail).toBe(node);
    expect(list.getTail?.data).toEqual(5);
});

test("test that when is created with node then node becomes head", ()=>{
    const node: _Node = new _Node(5);
    const list: LinkedList<number> = new LinkedList(node);

    expect(list.getHead).toBe(node);
});

test("test that when list is created with node in the constructor then the node becomes the tail", ()=> {
    const node: _Node = new _Node(5);
    const list: LinkedList<number> = new LinkedList(node);
    expect(list.getTail).toBe(node);
});

test("can get count of Nodes in list", ()=>{
    const node: _Node = new _Node(34);
    const list: LinkedList<number> = new LinkedList(node);

    const newNode: _Node = new _Node(45);
    list.add(newNode);

    expect(list.getCount).toEqual(2);
});

test("can add new node to list when list is not empty", ()=>{
    const node: _Node = new _Node(34);
    const list: LinkedList<number> = new LinkedList(node);

    const newNode: _Node = new _Node(45);
    list.add(newNode);

    expect(list.getCount).toEqual(2);
});

test("newly added node becomes the tail", ()=>{
    const node: _Node = new _Node(45);
    const list: LinkedList<number> = new LinkedList(node);

    const newNode: _Node = new _Node(56);
    list.add(newNode);

    expect(list.getTail).toBe(newNode);
});

test("Test that each node in list has a next node", ()=>{
    const node: _Node = new _Node(56);
    const list: LinkedList<number> = new LinkedList(node);

    const newNode: _Node = new _Node(45);
    list.add(newNode);

    expect(newNode).toBe(list.getHead?.nextNode);
});

test("can remove from list when node to remove is is the middle of list", ()=>{
    const firstNode: _Node = new _Node(67);
    const list: LinkedList<number> = new LinkedList(firstNode);

    const secondNode: _Node = new _Node(78);
    list.add(secondNode);

    const thirdNode: _Node = new _Node(56);
    list.add(thirdNode);

    const fourthNode: _Node = new _Node(23);
    list.add(fourthNode);

    expect(list.remove(56)).toBeTruthy();
});

test("can remove from list when data to remove is at the head of the list", ()=>{
    const firstNode: _Node = new _Node(67);
    const list: LinkedList<number> = new LinkedList(firstNode);

    const secondNode: _Node = new _Node(78);
    list.add(secondNode);

    const thirdNode: _Node = new _Node(56);
    list.add(thirdNode);

    const fourthNode: _Node = new _Node(23);
    list.add(fourthNode);

    expect(list.remove(67)).toBeTruthy();
    expect(secondNode).toBe(list.getHead)

});

test("can remove from list when there is only a single node", ()=>{
    const list: LinkedList<number> = new LinkedList();
    const node: _Node = new _Node(78);
    list.add(node);

    expect(list.remove(78)).toBeTruthy();
    expect(list.getHead).toBeNull();
    expect(list.getTail).toBeNull();
    expect(0).toEqual(list.getCount);
});

test("test can remove from list if node to remove is at the tail", () => {
    const firstNode: _Node = new _Node(67);
    const list: LinkedList<number>= new LinkedList(firstNode);

    const secondNode: _Node = new _Node(78);
    list.add(secondNode);

    const thirdNode: _Node = new _Node(56);
    list.add(thirdNode);

    const fourthNode: _Node = new _Node(23);
    list.add(fourthNode);

    expect(list.remove(23)).toBeTruthy();
    expect(thirdNode).toBe(list.getTail);
})