const data1 = {
  "value": 7,
  "isRed": false,
  "left": {
    "value": 3,
    "isRed": true,
    "left": {
      "value": 2,
      "isRed": false,
      "left": {
        "value": 1,
        "isRed": true
      }
    },
    "right": {
      "value": 5,
      "isRed": false,
      "left": {
        "value": 4,
        "isRed": true
      },
      "right": {
        "value": 6,
        "isRed": true
      }
    }
  },
  "right": {
    "value": 11,
    "isRed": true,
    "left": {
      "value": 9,
      "isRed": false,
      "left": {
        "value": 8,
        "isRed": true
      },
      "right": {
        "value": 10,
        "isRed": true
      }
    },
    "right": {
      "value": 13,
      "isRed": false,
      "left": {
        "value": 12,
        "isRed": true
      },
      "right": {
        "value": 14,
        "isRed": true
      }
    }
  }
}

const data2 = {
  "value": 30,
  "isRed": false,
  "left": {
    "value": 20,
    "isRed": false,
    "left": {
      "value": 10,
      "isRed": true,
      "left": {
        "value": 5,
        "isRed": false,
        "left": {
          "value": 2,
          "isRed": true
        },
        "right": {
          "value": 7,
          "isRed": true
        }
      },
      "right": {
        "value": 15,
        "isRed": false,
        "right": {
          "value": 17,
          "isRed": true
        }
      }
    },
    "right": {
      "value": 25,
      "isRed": true,
      "left": {
        "value": 35,
        "isRed": false,
        "left": {
          "value": 37,
          "isRed": true
        }
      }
    }
  },
  "right": {
    "value": 50,
    "isRed": false,
    "left": {
      "value": 40,
      "isRed": true
    },
    "right": {
      "value": 60,
      "isRed": true,
      "left": {
        "value": 55,
        "isRed": false,
        "right": {
          "value": 52,
          "isRed": true
        }
      },
      "right": {
        "value": 70,
        "isRed": false,
        "right": {
          "value": 80,
          "isRed": true
        }
      }
    }
  }
}


class RBTreeNode {
  constructor(value, parent) {
    this.left = null;
    this.right = null;
    this.isRed = false;
    this.parent = parent;
    this.value = value;
  }
}

const buildRBTree = (data) => {
  const root = new RBTreeNode(data.value);
  root.isRed = data.isRed;
  if (data.left) {
    root.left = buildRBTree(data.left);
    root.left.parent = root;
  }
  if (data.right) {
    root.right = buildRBTree(data.right);
    root.right.parent = root;
  }
  return root;
};


function solution(data) {
  const tree = buildRBTree(data);

  const countBlackNodes = (node) => {
    let resultH = 0;

    const traverse = (node, h) => {
      
      if (node) {
        if (!node.isRed) {
          traverse(node.left, h + 1);
          traverse(node.right, h + 1);
        } else {
          traverse(node.left, h);
          traverse(node.right, h);
        }
      } else {
        resultH = Math.max(resultH, h);
      }
    }

    traverse(node.left, 0);
    traverse(node.right, 0);

    return(resultH);
  }

  return countBlackNodes(tree);
}

console.log(solution(data2));