class Trie {
  constructor(key) {
    this.key = key;
    this.children = {};
    this.end = false;
  }
}

const buildTrie = (words) => {
  const root = new Trie(null);
  words.forEach((word) => {
    let node = root;
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      if (!node.children[char]) {
        node.children[char] = new Trie(char);
      }
      node = node.children[char];
    }
    node.end = true;
  });

  return root;
};

const words = [
  'apparatus',
  'apprehend',
  'appoint',
  'appreciate',
  'approachable',
  'apprentice',
  'appropriate',
  'approval',
  'appendage',
  'appraise',
  'bachelor',
  'backlash',
  'backyard',
  'baggage',
  'bailout',
  'balance',
  'ballroom',
  'bandit',
  'bankrupt',
  'barbecue',
];

const tree = buildTrie(words);

function solution(tree, prefix) {
  const result = [];

  const findPrefixSymbol = (node, i, str) => {
    if (!node) {
      return;
    }
    if (i < prefix.length && node.key !== prefix[i]) {
      return;
    } else if (node.end) {
      result.push(str + node.key)
      return;
    }
    
    const keys = Object.keys(node.children);
    for (let j = 0; j < keys.length; j++) {
      const n = node.children[keys[j]];
      findPrefixSymbol(n, i + 1, str + node.key);
    }
  }

  const keys = Object.keys(tree.children);
  for (let i = 0; i < keys.length; i++) {
    const node = tree.children[keys[i]];
    findPrefixSymbol(node, 0, "");
  }
  return result.sort();
}

// const prefix = "app";
// const prefix = "appr";
// const prefix = 'appro';
const prefix = 'ball';

console.log(solution(tree, prefix));
// console.log(tree);

const findWords = (root, prefix) => {
  let currentNode = root;

  [...prefix].forEach((char) => {
    if (!currentNode.children[char]) {
      return [];
    }
    currentNode = currentNode.children[char];
  });

  const words = [];

  const traverse = (node, word) => {
    if (node.end) {
      words.push(word + node.key);
    }

    Object.keys(node.children).forEach((childKey) => {
      traverse(node.children[childKey], word + node.key);
    });
  };

  traverse(currentNode, prefix.slice(0, -1));

  return words.sort();
};