// Array로 stack 구현하기
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack); // [1, 2, 3]

stack.pop();
console.log(stack); // [1, 2]

// 연결 리스트로 stack 구현하기
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(newValue) {
    const newNode = new Node(newValue);
    this.top = newNode;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const linkedStack = new Stack();
linkedStack.push(1);
linkedStack.push(2);
linkedStack.push(3);
console.log(linkedStack.pop()); // 3
console.log(linkedStack.size); // 2
