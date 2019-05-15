const SinglyLinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
      this.head = null;
      this.tail = null;
  }

};

function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);

  if (head === null) {
    let list = new SinglyLinkedList();
    list.head = newNode;
    return list.head;
  } else {
    let prevHead = head;
    prevHead
    head = newNode;
    head
    head.next = prevHead;
  }

  return head;
}

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function printNthFromLast(head, positionFromTail) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < positionFromTail; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.data;
}

// Intially the list in NULL.
let node1 = insertNodeAtHead(null, 7);
let node2 = insertNodeAtHead(node1, 19);
let node3 = insertNodeAtHead(node2, 2);
let node4 = insertNodeAtHead(node3, 6);
let node5 = insertNodeAtHead(node4, 20);
console.log(node5);
console.log('----------------------------------');

// INPUT: 20 -> 6 -> 2 -> 19 -> 7 -> null
console.log(printNthFromLast(node5, 3)); // OUTPUT: 6
