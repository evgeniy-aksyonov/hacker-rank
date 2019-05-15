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

function compareLists(llist1, llist2) {
  // checks for null head
  if (!llist1 || !llist2) {

    // if both null, the lists are the same length
    return llist1 === llist2 ? 1 : 0;
  }

  // if the data is the same, compare next node
  return llist1.data === llist2.data ? compareLists(llist1.next, llist2.next) : 0;
}

// list1
let node1 = insertNodeAtHead(null, 7);
let node2 = insertNodeAtHead(node1, 19);
let node3 = insertNodeAtHead(node2, 2);
let node4 = insertNodeAtHead(node3, 6);
let node5 = insertNodeAtHead(node4, 20);
console.log(node5);
console.log('----------------------------------');

let node6 = insertNodeAtHead(null, 7);
let node7 = insertNodeAtHead(node6, 19);
let node8 = insertNodeAtHead(node7, 2);
let node9 = insertNodeAtHead(node8, 6);
let node10 = insertNodeAtHead(node9, 20);
console.log(node10);
console.log('----------------------------------');

let node11 = insertNodeAtHead(null, 11);


// INPUT: list1 and list2
console.log(compareLists(node5, node10)); // OUTPUT: 1
console.log(compareLists(node5, node11)); // OUTPUT: 0
console.log(compareLists(null, null)); // OUTPUT: 1
