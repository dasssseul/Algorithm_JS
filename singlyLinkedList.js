// 노드 생성
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 단일 연결 리스트
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 탐색
  find(value) {
    let currentNode = this.head;
    while (value !== currentNode.value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 바로 뒤 삽입
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 중간 삽입
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  // 제거
  remove(value) {
    let previousNode = this.head;
    while (previousNode.next.value !== value) {
      previousNode = previousNode.next;
    }
    if (previousNode.next !== null) {
      previousNode.next = previousNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    let displayString = '[';
    while (currentNode !== null) {
      displayString += `${currentNode.value},`;
      currentNode = currentNode.next;
    }
    displayString += ']';
    console.log(displayString);
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);
singlyLinkedList.append(5);
singlyLinkedList.display();
console.log(singlyLinkedList.find(3));
singlyLinkedList.insert(singlyLinkedList.find(3), 4);
singlyLinkedList.display();
singlyLinkedList.remove(4);
singlyLinkedList.display();
