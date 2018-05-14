import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Node} from '../../../components/graph-visualization/d3/models';

@Component({
  selector: 'app-critical-links',
  templateUrl: './critical-links.component.html',
  styleUrls: ['./critical-links.component.css']
})
export class CriticalLinksComponent implements OnInit {
  private graph: GraphSingleton;
  private result: number[] = [];
  private isReady = false;
  private finalResult: string[] = [];
  private algorithmResult: string;

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  public run() {
    this.isReady = false;
    this.finalResult = [];
    this.algorithmResult = '';
    for (let index = 0; index < this.graph.links.length; index++) {

      const convertedGraph = GraphSingleton.Instance.toAdjacencyMatrix();

      const source = Number((<Node>this.graph.links[index].source).id) - 1;
      const target = Number((<Node>this.graph.links[index].target).id) - 1;

      convertedGraph[source][target] = 0;

      this.finalResult.push('(' + (source + 1) + '/' + (target + 1));

      const startNode = 0;
      const stack: number[] = [];
      this.result = [];

      stack.push(startNode);

      const visitedNode: Boolean[] = [];

      while (stack.length !== 0) {
        const actualTakenNode = stack.pop();

        if (visitedNode[actualTakenNode - 1]) {
          continue;
        }

        visitedNode[actualTakenNode - 1] = true;

        for (let i = 0; i < convertedGraph.length; i++) {
          for (let j = 0; j < convertedGraph[0].length; j++) {
            if (convertedGraph[actualTakenNode][j] !== 0) {
              stack.push(j);
            }
          }
        }
        this.result.push(actualTakenNode + 1);
      }
      this.checkResult();
    }
    this.isReady = true;
    this.algorithmResult = this.finalResult.valueOf().toString();
    this.algorithmResult = this.algorithmResult.split(',').join('');
  }

  private checkResult(): void {
    let index = 0;
    for (const item of this.graph.nodes) {
      for (const node of this.result) {
        if (Number(item.id) === node) {
          index++;
        }
      }
    }
    if (!(index === this.graph.nodes.length)) {
      this.finalResult.push(' === critical) ');
    } else {
      this.finalResult.push(' === not) ');
    }
    }
}
