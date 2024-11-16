const ast = {
  "instructionType": "multiple",
  "operator": "assign",
  "children": [
    {
      "instructionType": "argument",
      "operator": null,
      "children": null,
      "value": "a"
    },
    {
      "instructionType": "multiple",
      "operator": "sum",
      "children": [
        {
          "instructionType": "multiple",
          "operator": "multiply",
          "children": [
            {
              "instructionType": "argument",
              "operator": null,
              "children": null,
              "value": 5
            },
            {
              "instructionType": "argument",
              "operator": null,
              "children": null,
              "value": 10
            }
          ],
          "value": null
        },
        {
          "instructionType": "unary",
          "operator": "sqrt",
          "children": {
            "instructionType": "argument",
            "operator": null,
            "children": null,
            "value": 6
          },
          "value": null
        }
      ],
      "value": null
    }
  ],
  "value": null
}
function solution(ast) {

  const traverse = (node) => {
    if (!node) {
      return;
    }

    if (node.instructionType === "multiple") {
      const children = node.children.reduce((ch,c) => {
        ch.push(traverse(c));
        return ch;
      }, []);
      return [node.operator, children];
    } else if (node.instructionType === "argument") {
      return node.value;
    } else if (node.instructionType === "unary") {
      return [node.operator, node.children.value];
    }
  }

  return traverse(ast);
}

console.log(solution(ast));

// const solution = (ast) => {
//   if (ast.instructionType === 'argument') {
//     return ast.value;
//   }

//   const notation = [ast.operator];

//   if (ast.instructionType === 'multiple') {
//     const args = ast.children.map((child) => solution(child));
//     notation.push(args);
//   }

//   if (ast.instructionType === 'unary') {
//     notation.push(solution(ast.children));
//   }

//   return notation;
// };
