import { ListNode, LinkedList } from "../src/linkedList";

describe('when adding to a linked list', () => {
  it('should add the data as a new head', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)

    expect(linkedList.head?.data).toBe(nodeData)
  });

  it('should add nodes in order', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const secondNodeData = 'B'
    const secondListNode = new ListNode(secondNodeData)

    const thirdNodeData = 'C'
    const thirdListNode = new ListNode(thirdNodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)
    linkedList.add(secondListNode)
    linkedList.add(thirdListNode)

    expect(linkedList.head?.data).toBe(nodeData)
    expect(linkedList.head?.next?.data).toBe(secondNodeData)
    expect(linkedList.head?.next?.next?.data).toBe(thirdNodeData)
  });
});


describe('when deleting from linked list', () => {
  it('should remove from the head', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)

    const secondNodeData = 'B'
    const secondListNode = new ListNode(secondNodeData)

    linkedList.insert(secondListNode)

    expect(linkedList.head?.data).toBe(secondNodeData)
    expect(linkedList.head?.next?.data).toBe(nodeData)
  });
});

describe('when shifting', () => {
  it('should remove from the head for a single item list', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)

    const shiftedNode = linkedList.shift()

    expect(shiftedNode.data).toBe(nodeData)
    expect(linkedList.head).toBe(null)
  });

  it('should remove from the start of the list', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const secondNodeData = 'B'
    const secondListNode = new ListNode(secondNodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)
    linkedList.add(secondListNode)

    const shiftedNode = linkedList.shift()

    expect(shiftedNode.data).toBe(nodeData)
    expect(linkedList.head?.data).toBe(secondNodeData)
  });
});

describe('when pop', () => {
  it('should remove from the head for a single item list', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)

    const poppedNode = linkedList.pop()

    expect(poppedNode.data).toBe(nodeData)
    expect(linkedList.head).toBe(null)
  });

  it('should remove from the end of the list', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const secondNodeData = 'B'
    const secondListNode = new ListNode(secondNodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)
    linkedList.add(secondListNode)

    const poppedNode = linkedList.pop()

    expect(poppedNode.data).toBe(secondNodeData)
    expect(linkedList.head?.data).toBe(nodeData)
    expect(linkedList.head?.next).toBe(null)
  });
});

describe('delete', () => {
  it('should remove from the head for a single item list', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)

    linkedList.delete(nodeData)

    expect(linkedList.head).toBe(null)
  });

  it('should remove a node with the correct data', () => {
    const nodeData = 'A'
    const listNode = new ListNode(nodeData)

    const secondNodeData = 'B'
    const secondListNode = new ListNode(secondNodeData)

    const thirdNodeData = 'C'
    const thirdListNode = new ListNode(thirdNodeData)

    const linkedList = new LinkedList()
    linkedList.add(listNode)
    linkedList.add(secondListNode)
    linkedList.add(thirdListNode)

    linkedList.delete(secondNodeData)

    expect(linkedList.head?.data).toBe(nodeData)
    expect(linkedList.head?.next?.data).toBe(thirdNodeData)
    expect(linkedList.head?.next?.next).toBe(null)
  });
});