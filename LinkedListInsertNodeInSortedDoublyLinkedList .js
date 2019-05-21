const DoublyLinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
      this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
      this.head = null;
      this.tail = null;
  }
};

function insertNodeAtHead(head, data) {
  let newNode = new DoublyLinkedListNode(data);

  if (head === null) {
    let list = new DoublyLinkedList();
    list.head = newNode;
    return list.head;
  } else {
    let prevHead = head;
    head = newNode;
    head.next = prevHead;
    prevHead.prev = head;
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
function sortedInsert(head, data) {
  let newnode = new DoublyLinkedListNode(data);

  if (!head) { return newnode; }
  else if (head.data >= data) {
    head.prev = newnode;
    newnode.next = head;
    return newnode;
  } else {
    let h = head.next;
    while (h) {
      if (h.data >= data) {
        h.prev.next = newnode;
        newnode.prev = h.prev;
        newnode.next = h;

        return head;
      } else if (h.data < data && !h.next) {
        h.next = newnode;
        newnode.prev = h;
        return head;
      }

      h = h.next;
    }

    return head;
  }
}

// Intially the list in NULL.
let node1 = insertNodeAtHead(null, 7);
let node2 = insertNodeAtHead(node1, 4);
let node3 = insertNodeAtHead(node2, 2);
let node4 = insertNodeAtHead(node3, 1);
console.log(node4); // 1 -> 2 -> 4 -> 7 -> NULL
console.log('----------------------------------');

// INPUT: list1 and list2
console.log(sortedInsert(node4, 3)); // OUTPUT: 1 -> 2 -> 3 -> 4 -> 7 -> NULL
