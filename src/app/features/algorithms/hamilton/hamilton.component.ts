import {Component, Input, OnInit} from '@angular/core';
import Stack from 'ts-data.stack';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Node} from '../../../components/graph-visualization/d3/models';
import {GraphModel} from '../../../components/graph_model/GraphModel';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Component({
  selector: 'app-hamilton',
  templateUrl: './hamilton.component.html',
  styleUrls: ['./hamilton.component.css']
})
export class HamiltonComponent implements OnInit {
  @Input() currentGraph: GraphModel;
  private visited = new Map<Node, Boolean>();
  private stackOfNodes = new Stack<Node>();
  private graph: GraphSingleton;
  private isRoot: Boolean = true;
  private rootNode: Node;
  private result: string;
  private selectedNode = 1;
  private algorithmResult = 'none';
  private isRunAlgorithm = false;
  private algorytmPath: string;

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  public run(num: string) {
    this.algorithmResult = '';
    this.result = '';
    this.algorytmPath = '';
    this.isRunAlgorithm = false;
    this.isRoot = true;

    this.getAllNodeWithGraph();
    const node: Node = this.graph.findNodeBy(Number(num));
    this.DFSHamilton(node);
  }

  public DFSHamilton(node: Node): void {
    let test: Boolean = null;

    this.checkRoot(node);
    const adjacencyNodes = this.graph.getAdjacencyNodes(node);
    //
    this.stackOfNodes.push(node);

    if (this.result !== '') {
      this.result += '->';
    }

    this.result += Number(node.id);

    if (this.stackOfNodes.count() < this.graph.nodes.length) {
      test = false;
      const tmp = Number(node.id) - 1;
      this.visited.set(node, true);

      // console.log('visited');
      // console.log(this.visited[Number(node.id) - 1]);
      // console.log('/');
      // console.log(this.visited);

      adjacencyNodes.forEach((element) => {
        if (!this.visited.get(element)) {
          // console.log(element);
          this.DFSHamilton(element);
        }
      });
      // console.log('koniec');
      this.visited.set(node, false);
    } else {
      test = false;

      for (const element of adjacencyNodes) {
        if (element.id === this.rootNode.id) {
          test = true;
          break;
        }
      }
      const tmpNodes: Node[] = [];
      const tmpCount = this.stackOfNodes.count();
      if (tmpCount !== null) {
        for (let i = 0; i > tmpCount; i--) {
          tmpNodes[i] = this.stackOfNodes.pop();
          // console.log(stackOfNodesKey.valueOf());
        }
      }
      console.log(tmpNodes);

      console.log('end');
      console.log(test ? 'Cykl Hamiltona:' : 'Sciezka Hamiltona:');
      console.log(test ? this.result += '->' + Number(this.rootNode.id) + '\r\n' : this.result += '->' + '\r\n');
      console.log('repeat');
      // this.algorytmPath += this.algorithmResult + '\n' + this.result + '\n';
      this.isRunAlgorithm = true;
    }
     this.stackOfNodes.pop();

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
