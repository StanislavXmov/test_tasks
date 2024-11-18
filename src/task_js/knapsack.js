
function solution(items, weight) {
  let price = 0;

  const find = (i, w, p) => {
    // console.log(i, w, p);
    price = Math.max(price, p);
    for (let j = 0; j < i.length; j++) {
      const item = i[j];
      const newItems = [...i];
      newItems.splice(j, 1);
      if (item.weight + w <= weight) {
        find(newItems, item.weight + w, item.cost + p);
      }
    }
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const newItems = [...items];
    newItems.splice(i, 1);
    if (item.weight <= weight) {
      find(newItems, item.weight, item.cost);
    }
  }

  return price;
}

const items = [
  { name: 'backpack', weight: 6, cost: 30 },
  { name: 'headphones', weight: 1, cost: 20 },
  { name: 'book', weight: 4, cost: 20 },
  { name: 'phone', weight: 3, cost: 15 },
];

// console.log(solution(items, 9)); // 55
// console.log(solution(items, 6)); // 40

// const items = [
//   { name: 'headphones', weight: 4, cost: 10 },
//   { name: 'phone', weight: 10, cost: 16 },
//   { name: 'book', weight: 6, cost: 12 },
//   { name: 'backpack', weight: 8, cost: 14 },
// ];

// console.log(solution(items, 28)); // 52

// const items = [
//   { name: '4', weight: 4, cost: 4 },
//   { name: '1', weight: 1, cost: 1 },
//   { name: '3', weight: 3, cost: 2 },
// ];

// // console.log(solution(items, 4)); // 4
// console.log(solution(items, 1)); // 1

const solutionDP = (items, maxCapacity) => {
  // создаем матрицу
  const matrix = Array(items.length + 1).fill(0).map(() => Array(maxCapacity + 1).fill(0));
  
  // обходим строки
  for (let i = 1; i <= items.length; i += 1) {
    // обходим столбцы
    for (let j = 1; j <= maxCapacity; j += 1) {
      if (items[i - 1].weight > j) {
        matrix[i][j] = matrix[i - 1][j];
      } else {
        const prev = matrix[i - 1][j];
        const byFormula = items[i - 1].cost + matrix[i - 1][j - items[i - 1].weight];
        matrix[i][j] = Math.max(prev, byFormula);
      }
    }
  }
  console.log(matrix);
  
  return matrix[items.length][maxCapacity];
};

console.log(solutionDP(items, 9));