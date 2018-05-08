import {TreeNode} from './TreeNode';

export class Tree {
  root: TreeNode;
  adjacencies: Array<Array<number>>;
  nodes: Array<TreeNode>;
  allowCyclic: boolean;

  constructor(rootValue: number, allowCyclic: boolean = false) {
    this.root = new TreeNode(0, rootValue);
    this.adjacencies = [];
    this.adjacencies[0] = [];
    this.nodes = [];
    this.allowCyclic = allowCyclic;
  }

  addNode(node: TreeNode) {
    this.adjacencies[node.label] = [];
    this.nodes.push(node);
  }

  setConnection(node1Label: number, node2Label: number) {
    if (!this.allowCyclic && node1Label === node2Label) {
      throw Error('Graph cannot be cyclic');
    }
    this.adjacencies[node1Label].push(node2Label);
  }

  breadthFirstSearch(cb?: Function) {
    const visitedNodes: Array<number> = [];
    let nodesToProcess: Array<number> = [0];

    while (nodesToProcess.length) {
      const node = nodesToProcess.shift();

      if (cb) {
        const result = cb(node, visitedNodes, nodesToProcess);
        if (result === true) {
          break;
        }
      }

      if (!(visitedNodes.indexOf(node) > -1)) {
        nodesToProcess = nodesToProcess.concat(this.adjacencies[node]);
        visitedNodes.push(node);
      }
    }

    return visitedNodes;
  }

  depthFirstSearch(cb?: Function) {
    const visitedNodes: Array<number> = [];
    let nodesToProcess: Array<number> = [0];

    while (nodesToProcess.length) {
      const node = nodesToProcess.shift();

      if (cb) {
        const result = cb(node, visitedNodes, nodesToProcess);
        if (result === true) {
          break;
        }
      }

      if (!(visitedNodes.indexOf(node) > -1)) {
        visitedNodes.push(node);
        if (!this.adjacencies[node]) {
          continue;
        }
        nodesToProcess = this.adjacencies[node].concat(nodesToProcess);
      }
    }

    return visitedNodes;
  }
}
