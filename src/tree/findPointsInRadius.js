class KDTreeNode {
  constructor(point, dimension, parent) {
    this.point = point;
    this.dimension = dimension;
    this.right = null;
    this.left = null;
    this.parent = parent;
  }

  metric(point1, point2) {
    return Math.sqrt(
        Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2),
    );
  }

  nearestSearch(point, node, bestNodes, maxNodes) {
    if (node === null) {
        return; // Достигнут конец дерева
    }

    let dimension = this.dimension;
    let ownDistance = this.metric(point, node.obj);
    let linearPoint = {};
    let linearDistance;
    let bestChild, otherChild;

    for (let i = 0; i < this.dimension.length; i++) {
        if (i === this.dimension) {
            linearPoint[this.dimension[i]] = point[this.dimension[i]];
        } else {
            linearPoint[this.dimension[i]] = node.obj[this.dimension[i]];
        }
    }

    linearDistance = this.metric(linearPoint, node.obj);

    if (
        bestNodes.length < maxNodes ||
        ownDistance < bestNodes[bestNodes.length - 1][1]
    ) {
        if (bestNodes.length === maxNodes) {
            bestNodes.pop(); // Удаляем последний элемент, если массив лучших узлов уже заполнен
        }
        bestNodes.push([node.obj, ownDistance]); // Добавляем текущий узел в массив лучших узлов
        bestNodes.sort((a, b) => a[1] - b[1]); // Сортируем массив лучших узлов по расстоянию
    }

    if (
        bestNodes.length < maxNodes ||
        Math.abs(linearDistance) < bestNodes[bestNodes.length - 1][1]
    ) {
        if (linearDistance < 0) {
            bestChild = node.right;
            otherChild = node.left;
        } else {
            bestChild = node.left;
            otherChild = node.right;
        }
        this.nearestSearch(point, bestChild, bestNodes, maxNodes); // Рекурсивно ищем в ближайшем поддереве
        if (Math.abs(linearDistance) < bestNodes[bestNodes.length - 1][1]) {
            this.nearestSearch(point, otherChild, bestNodes, maxNodes); // Поиск в другом поддереве, если необходимо
        }
    }
}
}

const buildTree = (points, depth, dimensions, parent) => {
  const dim = dimensions[depth % dimensions.length];

  if (points.length === 0) {
    return null;
  }

  if (points.length === 1) {
    return new KDTreeNode(points[0], dim, parent);
  }

  points.sort((a, b) => a[dimensions[dim]] - b[dimensions[dim]]);

  const median = Math.floor(points.length / 2);
  const node = new KDTreeNode(points[median], dim, parent);

  node.left = buildTree(points.slice(0, median), depth + 1, dimensions, node);
  node.right = buildTree(points.slice(median + 1), depth + 1, dimensions, node);

  return node;
};

const findPointsInRadius = (tree, centerPoint, radius) => {
  const result = [];

  const metric = (point1, point2) => {
    return Math.sqrt(
        Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2),
    );
  }

  const traverse = (node) => {
    if (!node) {
      return;
    }
    if (metric(node.point, centerPoint) < radius) {
      result.push(node.point);
    }

    traverse(node.left);
    traverse(node.right);
  }

  traverse(tree);

  return result;
}


const solution = (points, centerPoint, radius) => {
  const tree = buildTree(points, 0, ['x', 'y'], null);
  
  return findPointsInRadius(tree, centerPoint, radius);
};

// const points = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
//   { x: 5, y: 6 },
//   { x: 7, y: 8 },
// ];

// const expected = [
//   { x: 3, y: 4 },
//   { x: 5, y: 6 },
// ];

// const centerPoint = { x: 4, y: 5 };
// const radius = 2;

const points = [
  { x: -5, y: -2 },
  { x: -4, y: -1 },
  { x: -3, y: 0 },
  { x: -2, y: 1 },
  { x: -1, y: 2 },
  { x: 0, y: 4 },
  { x: 1, y: 5 },
  { x: 2, y: 7 },
];

// const expected = [
//   { x: -3, y: 0 },
//   { x: -2, y: 1 },
//   { x: -1, y: 2 },
//   { x: 0, y: 4 },
// ];

const centerPoint = { x: -2, y: 2 };
const radius = 3;

console.log(solution(points, centerPoint, radius));


// function findPointsInRadius(node, centerPoint, radius) {
//   if (node === null) {
//     return [];
//   }

//   const dx = centerPoint.x - node.point.x;
//   const dy = centerPoint.y - node.point.y;

//   const distanceSquared = dx * dx + dy * dy;

//   if (distanceSquared <= radius * radius) {
//     return [node.point].concat(
//       findPointsInRadius(node.left, centerPoint, radius),
//       findPointsInRadius(node.right, centerPoint, radius),
//     );
//   }
//   if (node.dimension === 'x' && centerPoint.x - radius <= node.point.x) {
//     return findPointsInRadius(node.left, centerPoint, radius).concat(
//       findPointsInRadius(node.right, centerPoint, radius),
//     );
//   }
//   if (node.dimension === 'y' && centerPoint.y - radius <= node.point.y) {
//     return findPointsInRadius(node.left, centerPoint, radius).concat(
//       findPointsInRadius(node.right, centerPoint, radius),
//     );
//   }

//   return findPointsInRadius(node.right, centerPoint, radius);
// }

// export default (points, centerPoint, radius) => {
//   const tree = buildKDTree(points, 0, ['x', 'y'], null);
//   return findPointsInRadius(tree, centerPoint, radius);
// };