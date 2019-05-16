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

function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.data < head2.data) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeLists(head2.next, head1);
    return head2;
  }
}

// list1
let node1 = insertNodeAtHead(null, 20);
let node2 = insertNodeAtHead(node1, 6);
let node3 = insertNodeAtHead(node2, 5);
let node4 = insertNodeAtHead(node3, 3);
let node5 = insertNodeAtHead(node4, 1);
// console.log(node5);
console.log('----------------------------------');

let node6 = insertNodeAtHead(null, 24);
let node7 = insertNodeAtHead(node6, 22);
let node8 = insertNodeAtHead(node7, 21);
let node9 = insertNodeAtHead(node8, 19);
let node10 = insertNodeAtHead(node9, 2);
// console.log(node10);
console.log('----------------------------------');


// INPUT: list1 and list2
console.log(mergeLists(node5, node10)); // OUTPUT: 1
