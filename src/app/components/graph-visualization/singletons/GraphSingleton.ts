import {Link, Node} from '../d3/models';

export class GraphSingleton {

  private static _instance: GraphSingleton = new GraphSingleton();
  public nodes: Node[] = [];
  public links: Link[] = [];


  public AddData(nodes: Node[], links: Link[]) {
    this.nodes = nodes;
    this.links = links;
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public getAdjacencyNodes(node: Node): Node[] {
    const adjacencyLinks: Link[] = [];
    this.links.forEach((link) => {
      if ((<Node>(link.source)).id === node.id || (<Node>(link.target)).id === node.id) {
        adjacencyLinks.push(link);
      }
    });
    const adjacencyNodes: Node[] = [];
    adjacencyLinks.forEach(
      (link) => {
        if ((<Node>(link.source)).id !== node.id) {
          const source = Number((<Node>(link.source)).id);
          adjacencyNodes.push(this.findNodeBy(source));
        } else {
          const target = Number((<Node>(link.target)).id);
          adjacencyNodes.push(this.findNodeBy(target));
        }
      });
    return adjacencyNodes;
  }

  public findNodeBy(num: Number): Node {
    let node: Node;
    this.nodes.forEach((item) => {
      if (Number(item.id) === num) {
        node = item;
      }
    });
    return node;
  }

  public toAdjacencyMatrix(): number[][] {
    const matrix: number[][] = [[]];
    for (let i = 0; i < this.nodes.length; i++) {
      matrix[i] = [];
      const adjacencyNodes = this.getAdjacencyNodes(this.nodes[i]);
      adjacencyNodes.sort();
      for (let j = 0; j < this.nodes.length; j++) {
        if (adjacencyNodes.includes(this.nodes[j])) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  }

  public isConsistentGraph(): Boolean {
    const convertedGraph = this.toAdjacencyMatrix();

    const startNode = 0;
    const stack: number[] = [];
    stack.push(startNode);
    const visitedNodes: Boolean[] = [];

    while (stack.length !== 0) {
      let vc = 0;
      const actualTakenNode = stack.pop();

      if (visitedNodes[actualTakenNode - 1]) {
        continue;
      }

      visitedNodes[actualTakenNode] = true;

      for (let i = 0; i < convertedGraph.length; i++) {
        for (let j = 0; j < convertedGraph[0].length; j++) {
          if (convertedGraph[actualTakenNode][j] !== 0) {
            stack.push(j);
          }
          vc++;
        }
      }

      if (vc !== this.nodes.length) {
        return false;
      }


    }
    return true;
  }
}
