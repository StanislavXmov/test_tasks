class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  isLinked(vertex) {
    return this.adjacentVertices.includes(vertex);
  }

  addLink(vertex) {
    if (!this.isLinked(vertex)) {
      this.adjacentVertices.push(vertex);
      vertex.adjacentVertices.push(this);
    }
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }

  getVertex(value) {
    return this.vertices.find((x) => x.value === value);
  }

  addVertex(value) {
    if (this.getVertex(value) === undefined) {
      this.vertices.push(new Vertex(value));
    }
  }

  addEdge(value1, value2) {
    const vertex1 = this.getVertex(value1);
    const vertex2 = this.getVertex(value2);

    if (vertex1 !== undefined && vertex2 !== undefined) {
      vertex1.addLink(vertex2);
    }
  }
}

const graph = new Graph();

graph.addVertex('Москва');
graph.addVertex('Санкт Петербург');
graph.addVertex('Калининград');
graph.addVertex('Омск');
graph.addVertex('Новосибирск');
graph.addVertex('Якутск');

graph.addEdge('Санкт Петербург', 'Калининград');
graph.addEdge('Калининград', 'Москва');
graph.addEdge('Калининград', 'Якутск');
graph.addEdge('Москва', 'Якутск');
graph.addEdge('Москва', 'Омск');
graph.addEdge('Москва', 'Новосибирск');
graph.addEdge('Омск', 'Новосибирск');

function dfs(graph, city1, city2, length) {
  const result = [];
  const start = graph.getVertex(city1);
  if (!start) {
    return result;
  }
  if (city1 === city2) {
    return [start.value];
  }

  const find = (city, visited ) => {
    if (visited.includes(city.value)) {
      return;
    }
    
    if (visited.length <= length) {
      if (city.value === city2) {
        visited.push(city.value);
        result.push(visited.join("-"));
      } else {
        for (let i = 0; i < city.adjacentVertices.length; i++) {
          const c = city.adjacentVertices[i];
          find(c, [...visited, city.value]);
        }
      }
    } 
  }

  for (let i = 0; i < start.adjacentVertices.length; i++) {
    const c = start.adjacentVertices[i];
    find(c, [start.value]);
  }
  
  return result;
}

// console.log(dfs(graph, 'Новосибирск', 'Калининград', 3));
// console.log(dfs(graph, 'Новосибирск', 'Калининград', 2));
console.log(dfs(graph, 'Москва', 'Москва', 3));
console.log(dfs(graph, 'Ростов', 'Калининград', 3));
console.log(dfs(graph, 'Москва', 'Владивосток', 3));
