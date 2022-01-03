// 큐
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const q = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    q.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);
  let count = 0;
  while (true) {
    let curr = q.peek();
    if (curr[0] < priorities[count]) {
      q.enqueue(q.dequeue());
    } else {
      const value = q.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}
