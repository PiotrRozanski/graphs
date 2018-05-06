import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import Stack from 'ts-data.stack';
import {Link} from '../../../components/graph-visualization/d3/models';

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
    const convertedGraph = GraphSingleton.Instance;

    const startNode = 0;
    const stack = new Stack<number>();
    const result: number[] = [];

    stack.push(startNode);

    const visitedNode: boolean[] = [];
    // const visitedNode = Boolean(convertedGraph.links[0]);

    while (stack.count() !== 0) {
      const actualTakenNode = stack.pop();

      if (visitedNode[actualTakenNode]) {
        continue;
      }

      visitedNode[actualTakenNode] = true;

      // for (let i = convertedGraph.links.length - 1; i >= 0; i--) {
      //   if (convertedGraph[actualTakenNode, i] !== 0) {
      //     stack.push(i);
      //   }
      // }

      convertedGraph.links.forEach((item, index) => {
        console.log(index);
        if (item.source === actualTakenNode && item.target === (index + 1)) {
          stack.push(index + 1);
        }
      });

      result.push(actualTakenNode);
    }
    console.log(result);
    return result;
  }

  // public getCriticalLinks(): Link[] {
  //   let criticalLink: Link[];
  //   let graph = GraphSingleton.Instance;
  //
  //   graph.links.forEach((item) => {
  //     // let clone = GraphSingleton.Instance;
  //     // let cloneLink =
  //
  //   });
  // }

}
