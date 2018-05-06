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
  private stackOfNodes: Node[] = [];
  private graph: GraphSingleton;
  private isRoot: Boolean = true;
  private rootNode: Node;
  private result: string;
  private selectedNode = 1;
  private algorithmResult = 'none';
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
    this.isRoot = true;

    this.getAllNodeWithGraph();
    const node: Node = this.graph.findNodeBy(Number(num));
    this.DFSHamilton(node);
  }

  public DFSHamilton(node: Node): void {
    let test: Boolean = null;

    this.checkRoot(node);
    const adjacencyNodes = this.graph.getAdjacencyNodes(node);
    this.stackOfNodes.push(node);

    if (this.stackOfNodes.length < this.graph.nodes.length) {
      test = false;
      this.visited.set(node, true);

      adjacencyNodes.forEach((element) => {
        if (!this.visited.get(element)) {
          this.DFSHamilton(element);
        }
      });
      this.visited.set(node, false);
    } else {
      test = false;

      // dobrze działa

      for (const element of adjacencyNodes) {
        if (element.id === this.rootNode.id) {
          // raczej dobrze ale upewnic się
          test = true;
          break;
        }
      }

      this.result = '';
      this.stackOfNodes.forEach((item) => {
        this.result += '->' + item.id;
      });
      console.log('end');
      console.log(test ? 'Cykl Hamiltona:' : 'Sciezka Hamiltona:');
      console.log(test ? this.result += '->' + Number(this.rootNode.id) + '\r\n' : this.result + '\r\n');
      console.log('repeat');
      this.result = '';
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
