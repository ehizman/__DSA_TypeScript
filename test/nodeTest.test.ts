import {_Node} from "../src/linkedLists/node"

test("node has data upon creation", ()=>{
    const node: _Node = new _Node(5);
    expect(node).not.toBeNull();
    expect(node.data).toEqual(5);
});

test("node has next node", () => {
    const node: _Node = new _Node(10);
    const nextNode: _Node = new _Node(20);

    node.setNextNode = nextNode;
    expect(node.nextNode).toBe(nextNode);
});