const tree = {
  "leaf": false,
  "keys": [30,70],
  "children": [
    {
      "leaf": false,
      "keys": [8,25],
      "children": [
        {
          "leaf": true,
          "keys": [1,2,7],
          "children": []
        },
        {
          "leaf": true,
          "keys": [15, 21, 23],
          "children": []
        },
        {
          "leaf": true,
          "keys": [26, 28],
          "children": []
        }
      ]
    },
    {
      "leaf": false,
      "keys": [40, 50],
      "children": [
        {
          "leaf": true,
          "keys": [35, 38],
          "children": []
        },
        {
          "leaf": true,
          "keys": [42, 49],
          "children": []
        },
        {
          "leaf": true,
          "keys": [56, 57],
          "children": []
        }
      ]
    },
    {
      "leaf": false,
      "keys": [76, 88],
      "children": [
        {
          "leaf": true,
          "keys": [71, 73, 75],
          "children": []
        },
        {
          "leaf": true,
          "keys": [77, 85],
          "children": []
        },
        {
          "leaf": true,
          "keys": [89, 97],
          "children": []
        }
      ]
    }
  ]
}

class BTreeNode {
  constructor(keys = []) {
    this.leaf = false; // Флаг, который показывает, что текущий узел является листовым
    this.keys = keys; // Массив ключей (полезной нагрузки) узла
    this.children = []; // Массив дочерних узлов
  }
}

const buildBTree = (data) => {
  const root = new BTreeNode(data.keys);
  root.leaf = data.leaf;
  if (!data.leaf) {
    data.children.forEach((child) => {
      root.children.push(buildBTree(child));
    });
  }
  return root;
};

const findValuesInRange = (tree, min, max) => {
  const result = [];

  const find = (node) => {
    for (let i = 0; i < node.keys.length; i++) {
      const value = node.keys[i];
      
      if (value >= min && value < max || value > min && value <= max) {
        result.push(value);
      }

      if (node.leaf) {
        continue;
      }

      if (i > 0 && value > max) {
        break;
      } else if (value > min) {
        for (let j = i; j < node.children.length; j++) {
          find(node.children[j]);
        }
      } else if (value > min && value < max) {
        find(node.children[node.children.length - 1]);
      } else if (i === node.keys.length - 1 && value < min && value < max) {
        find(node.children[node.children.length - 1]);
      }
    }

  }

  find(tree);

  return result;
}

const solution = (data, min, max) => findValuesInRange(buildBTree(data), min, max);

console.log(solution(tree, 0, 10));
// console.log(solution(tree, 10, 30));
// console.log(solution(tree, 40, 70));
// console.log(solution(tree, 80, 100));

// function findValuesInRange(node, min, max) {
//   let values = [];
//   const { keys, children } = node;

//   // Поиск значений в текущем узле
//   for (let i = 0; i < keys.length; i += 1) {
//     if (keys[i] >= min && keys[i] <= max) {
//       values.push(keys[i]);
//     }
//   }

//   // Рекурсивный поиск значений в дочерних узлах
//   if (!node.leaf) {
//     for (let i = 0; i < children.length; i += 1) {
//       if (i === 0 && keys[0] >= min) {
//         values = values.concat(findValuesInRange(children[i], min, max));
//       } else if (i === children.length - 1 && keys[keys.length - 1] <= max) {
//         values = values.concat(findValuesInRange(children[i], min, max));
//       } else if (keys[i] >= min && keys[i] <= max) {
//         values = values.concat(findValuesInRange(children[i], min, max));
//       }
//     }
//   }

//   return values;
// }