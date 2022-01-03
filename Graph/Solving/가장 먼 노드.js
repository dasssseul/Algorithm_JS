// 인접 리스트를 이용한 Graph + shift함수 + BFS
function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = [1];
  while (queue.length > 0) {
    const src = queue.shift();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const maxLen = Math.max(...distance);
  return distance.filter((dist) => dist === maxLen).length;
}

// 인접 리스트를 이용한 Graph + Array를 이용한 Queue + BFS
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

  // queue의 제일 첫번째 값
  peek() {
    return this.queue[this.front];
  }

  // queue의 length
  size() {
    return this.rear - this.front;
  }
}

function solution2(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = new Queue();
  queue.enqueue(1);
  while (queue.size() > 0) {
    const src = queue.dequeue();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((dist) => dist === max).length;
}

// 인접 리스트를 이용한 Graph + 연결 리스트를 이용한 Queue + BFS
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution3(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = new Queue();
  queue.enqueue(1);
  while (queue.size > 0) {
    const src = queue.dequeue();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((dist) => dist === max).length;
}
