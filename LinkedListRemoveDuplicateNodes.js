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

function removeDuplicates(head) {
  if (!head) return null;
  let n = head;
  while (n.next) {
    if (n.data === n.next.data) n.next = n.next.next;
    else n = n.next;
  }
  return head;
}

// list1
let node1 = insertNodeAtHead(null, 5);
let node2 = insertNodeAtHead(node1, 4);
let node3 = insertNodeAtHead(node2, 3);
let node4 = insertNodeAtHead(node3, 3);
let node5 = insertNodeAtHead(node4, 3);
// console.log(node5);
console.log('----------------------------------');


// INPUT: 3 -> 3 -> 3 -> 4 -> 5 -> null
console.log(removeDuplicates(node5)); // OUTPUT: 3 -> 4 -> 5 -> null
