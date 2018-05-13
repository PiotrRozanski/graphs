import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Link, Node} from '../../../components/graph-visualization/d3/models';
import {CopyGraphSingleton} from '../../../components/graph-visualization/singletons/CopyGraphSingleton';
import {TreeNode} from './TreeNode';
import {Tree} from './Tree';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dfs',
  templateUrl: './dfs.component.html',
  styleUrls: ['./dfs.component.css']
})
export class DfsComponent implements OnInit {
  private graph: GraphSingleton;
  private result: string;
  private isReady = false;

  constructor() {
    this.graph = GraphSingleton.Instance;
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
    const clone = CopyGraphSingleton.Instance;


    graph.links.forEach((item) => {

        let cloneLink: Link;
        clone.AddData(Object.assign({}, graph.nodes), Object.assign({}, graph.links));

        let index = 0;
        for (const element of clone.links) {
          if ((<Node>element.source).id === (<Node>item.source).id && (<Node>element.target).id === (<Node>item.target).id) {
            cloneLink = Object.assign({}, element);
            clone.links.splice(index, 1);
          }
          index++;
        }

        if (!clone.isConsistentGraph()) {
          criticalLink.push(item);
        }

      }
    );
    console.log('krytyczne' + criticalLink);
  }

  public runDFS() {
    this.result = '';
    this.isReady = false;
    const tree = new Tree(100);
    this.graph.nodes.forEach((item) => {
      tree.addNode(new TreeNode(Number(item.id), Number(item.id)));
    });
    this.graph.links.forEach((item) => {
      tree.setConnection((Number((<Node>item.source).id) - 1), (Number((<Node>item.target).id) - 1));
    });
    tree.depthFirstSearch().forEach((item) => {
      if (this.result === '') {
        this.result += item;
      } else {
        this.result += '->' + item;
      }
    });
    this.isReady = true;
  }
}
