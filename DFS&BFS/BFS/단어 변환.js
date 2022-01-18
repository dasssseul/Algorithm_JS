function solution(begin, target, words) {
  let visited = [];
  let queue = [];
  let answer = 0;

  if (!words.includes(target)) return 0;
  queue.push([begin, answer]);
  while (queue.length > 0) {
    let [currentWord, cnt] = queue.shift();
    if (currentWord === target) return cnt;
    words.forEach((word) => {
      let notEqual = 0;
      if (visited.includes(word)) return;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== currentWord[i]) notEqual++;
      }
      if (notEqual === 1) {
        queue.push([word, ++cnt]);
        visited.push(word);
      }
    });
  }
}
