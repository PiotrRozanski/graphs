import {TreeNode} from './TreeNode';

export class Tree {
  // The root of a the tree
  root: TreeNode;
  // We use adjacency list to for BFS/DFS, we keep only the labels here
  // not the actual nodes
  adjacencies: Array<Array<number>>;
  // Array of the nodes
  nodes: Array<TreeNode>;
  // Allow a node to be connected with itself, cyclic graph
  allowCyclic: boolean;

  constructor(rootValue: number, allowCyclic: boolean = false) {
    this.root = new TreeNode(0, rootValue);
    this.adjacencies = [];
    this.adjacencies[0] = [];
    this.nodes = [];
    this.allowCyclic = allowCyclic;
  }

  /**
   * Add a node to the tree
   *
   * @param {TreeNode} node
   */
  addNode(node: TreeNode) {
    this.adjacencies[node.label] = [];
    this.nodes.push(node);
  }

  /**
   * Set a connection between two nodes
   *
   * @param {number} node1
   * @param {number} node2
   */
  setConnection(node1Label: number, node2Label: number) {
    if (!this.allowCyclic && node1Label === node2Label) {
      throw Error('Graph cannot be cyclic');
    }
    this.adjacencies[node1Label].push(node2Label);
  }

  /**
   * Breath first search
   *
   * @param {Function} [cb]
   * @returns {array}
   */
  breadthFirstSearch(cb?: Function) {
    const visitedNodes: Array<number> = [];
    let nodesToProcess: Array<number> = [0];

    while (nodesToProcess.length) {
      const node = nodesToProcess.shift();

      // process the node if there is a callback
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

  /**
   * Depth first search
   *
   * @param {Function} [cb]
   * @returns {array}
   */
  depthFirstSearch(cb?: Function) {
    const visitedNodes: Array<number> = [];
    let nodesToProcess: Array<number> = [0];

    while (nodesToProcess.length) {
      const node = nodesToProcess.shift();

      // process the node if there is a callback
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
