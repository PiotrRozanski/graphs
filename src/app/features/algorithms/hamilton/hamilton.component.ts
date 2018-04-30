import {Component, Input, OnInit} from '@angular/core';
import Stack from 'ts-data.stack';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Node} from '../../../components/graph-visualization/d3/models';

@Component({
  selector: 'app-hamilton',
  templateUrl: './hamilton.component.html',
  styleUrls: ['./hamilton.component.css']
})
export class HamiltonComponent implements OnInit {
  private visited = new Map<Node, Boolean>();
  private stackOfNodes = new Stack<Node>();
  private graph: GraphSingleton;
  private isRoot: Boolean = true;
  private rootNode: Node;
  private result: string;

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  public run(num: number) {
    this.result = '';
    this.getAllNodeWithGraph();
    const node: Node = this.graph.findNodeBy(num);
    this.DFSHamilton(node);
  }

  public DFSHamilton(node: Node): void {
    let test: Boolean;

    this.checkRoot(node);
    const adjacencyNodes = this.graph.getAdjacencyNodes(node);
    this.stackOfNodes.push(node);
    if (this.result !== '') {
      this.result += '->';
    }
    this.result += Number(node.id);

    if (this.stackOfNodes.count() < this.graph.nodes.length) {
      test = false;
      this.visited[Number(node.id) - 1] = true;

      adjacencyNodes.forEach((element) => {
        if (!this.visited[Number(element.id) - 1]) {
          this.DFSHamilton(element);
        }
      });
      this.visited[Number(node.id) - 1] = false;
    } else {
      test = false;
      adjacencyNodes.forEach((element) => {
        if (element === this.rootNode) {
          test = true;
        }
      });
      console.log(test ? 'Cykl Hamiltona:' : 'Sciezka Hamiltona:');
      console.log(test ? this.result += '->' + Number(this.rootNode.id) + '\r\n' : '\r\n');
    }
    this.stackOfNodes = new Stack<Node>();
  }

  private getAllNodeWithGraph() {
    this.visited = new Map<Node, Boolean>();
    this.graph.nodes.forEach((element) => {
      this.visited.set(element, false);
    });
  }

  private checkRoot(node: Node) {
    if (this.isRoot) {
      this.rootNode = node;
      this.isRoot = false;
    }
  }
}
