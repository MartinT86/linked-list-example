class ListNode {
    data: string
    next: ListNode | null = null
    constructor(data: string) {
        this.data = data
    }
}

class LinkedList {
    head: ListNode | null = null

    add(node: ListNode) {
        if (!this.head) {
            this.head = node
        } else {
            let nextNode = this.head
            while (nextNode?.next) {
                nextNode = nextNode.next
            }
            if (nextNode) {
                nextNode.next = node
            }
        }
    }

    insert(node: ListNode) {
        if (!this.head) {
            this.head = node
        } else {
            const prevHead = this.head
            this.head = node
            this.head.next = prevHead
        }
    }

    shift(): ListNode {
        if (!this.head) {
            throw new Error("Empty list");
        }
        if (!this.head.next) {
            const prevHead = this.head
            this.head = null
            return prevHead
        }
        const prevHead = this.head
        this.head = prevHead.next
        return prevHead
    }

    pop(): ListNode {
        if (!this.head) {
            throw new Error("Empty list");
        }
        if (!this.head.next) {
            const prevHead = this.head
            this.head = null
            return prevHead
        }
        let prevNode = this.head
        let currentNode = this.head
        while (currentNode.next) {
            prevNode = currentNode
            currentNode = currentNode.next
        }
        prevNode.next = null
        return currentNode
    }

    delete(data: string) {
        if (!this.head) {
            throw new Error("Empty list");
        }
        if (this.head.next == null && this.head.data == data) {
            this.head = null
        } else {
            let prevNode = this.head
            let currentNode = this.head
            while (currentNode.next) {
                prevNode = currentNode
                currentNode = currentNode.next
                if (currentNode.data == data) {
                    prevNode.next = currentNode.next
                }
            }
        }
    }
}

export { ListNode, LinkedList }