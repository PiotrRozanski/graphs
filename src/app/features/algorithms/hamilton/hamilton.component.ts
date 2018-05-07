import {Component, Input, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Node} from '../../../components/graph-visualization/d3/models';
import {GraphModel} from '../../../components/graph_model/GraphModel';

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
  private algorithmResult: string[] = [];
  private algorytmPath: string;

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  public run(num: string) {
    this.algorithmResult = [];
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

      for (const element of adjacencyNodes) {
        if (element.id === this.rootNode.id) {
          test = true;
          break;
        }
      }

      this.result = '';
      this.stackOfNodes.forEach((item) => {
        if (this.result === '') {
          this.result += item.id;
        } else {
          this.result += '->' + item.id;
        }
      });
      let type = '';
      console.log(test ? type += 'Cykl Hamiltona:' : type += 'Sciezka Hamiltona:');
      console.log(test ? this.result += '->' + Number(this.rootNode.id) + '\r\n' : this.result + '\r\n');
      this.algorithmResult.push(type + ' ' + this.result);
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
