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

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
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

// Intially the list in NULL.
let node1 = insertNodeAtHead(null, 123); //  After inserting 123, the list is 123 -> NULL. 
let node2 = insertNodeAtHead(node1, 456); // After inserting 456, the list is 456 -> 123 -> NULL. 
let node3 = insertNodeAtHead(node2, 789); // After inserting 789, the list is 789 -> 456 -> 123 -> NULL. 
console.log('node1: ', node1);
console.log('node2: ', node2);
console.log('node3: ', node3);


