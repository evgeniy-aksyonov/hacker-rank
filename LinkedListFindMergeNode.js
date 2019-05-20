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
function findMergeNode(headA, headB) {
  let h1 = headA;

  while (!!h1) {
    h1.visited = true;
    h1 = h1.next;
  }

  let h2 = headB;

  while (!!h2) {
    if (h2.visited) {
      return h2.data;
    } else {
      h2 = h2.next;
    }
  }

  return null;
}

// Intially the list in NULL.
let node1 = insertNodeAtHead(null, 7);
let node2 = insertNodeAtHead(node1, 19);
let node3 = insertNodeAtHead(node2, 2);
let node4 = insertNodeAtHead(node3, 6);
console.log(node4); // 6 -> 2 -> 19 -> 7 -> NULL
console.log('----------------------------------');

let node8 = insertNodeAtHead(node2, 4);
console.log(node8); // 4 -> 19 -> 7 -> NULL

// INPUT: list1 and list2
//6--->2
    // \
    // 19--->7--->Null
    // /
    //4
console.log(findMergeNode(node4, node8)); // OUTPUT: 19
