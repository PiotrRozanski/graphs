import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Link, Node} from '../../../components/graph-visualization/d3/models';
import {id} from '@swimlane/ngx-graph/release/utils';

@Component({
  selector: 'app-dfs',
  templateUrl: './dfs.component.html',
  styleUrls: ['./dfs.component.css']
})
export class DfsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public run(): number[] {
    const convertedGraph = GraphSingleton.Instance.toAdjacencyMatrix();

    const startNode = 0;
    const stack: number[] = [];
    const result: number[] = [];

    stack.push(startNode);

    const visitedNode: Boolean[] = [];

    while (stack.length !== 0) {
      console.log('repeat');
      const actualTakenNode = stack.pop();

      if (visitedNode[actualTakenNode - 1]) {
        continue;
      }

      visitedNode[actualTakenNode - 1] = true;

      const tmp = convertedGraph.length * convertedGraph[0].length;
      for (let i = 0; i < convertedGraph.length; i++) {
        for (let j = 0; j < convertedGraph[0].length; j++) {
          if (convertedGraph[actualTakenNode][j] !== 0) {
            stack.push(j);
          }
        }
      }
      result.push(actualTakenNode + 1);
    }
    console.log(result);
    return result;
  }

  public getCriticalLinks(): void {
    const criticalLink: Link[] = [];
    const graph = GraphSingleton.Instance;

    graph.links.forEach((item) => {

        const clone = graph;
        let cloneLink: Link;
        clone.links.forEach((element, index) => {
          if ((<Node>element.source).id === (<Node>item.source).id && (<Node>element.target).id === (<Node>item.target).id) {
            cloneLink = element;
            clone.links.splice(index);
          }
        });

        if (!clone.isConsistentGraph()) {
          criticalLink.push(item);
        }

      }
    );
    console.log(criticalLink);
  }

}
