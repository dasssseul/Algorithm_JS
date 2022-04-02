function solution(bridge_length, weight, truck_weights) {
  let currentBridge = new Array(bridge_length).fill(0);
  let currentWeight = 0;
  let time = 1;

  const currentTruck = truck_weights.shift();
  currentBridge.shift();
  currentBridge.push(currentTruck);
  currentWeight += currentTruck;

  while (currentWeight) {
    const currentTruck = truck_weights.shift();
    currentWeight -= currentBridge.shift();
    if (currentTruck + currentWeight <= weight) {
      currentBridge.push(currentTruck);
      currentWeight += currentTruck;
    } else {
      currentBridge.push(0);
      truck_weights.unshift(currentTruck);
    }
    time++;
  }
  return time;
}
