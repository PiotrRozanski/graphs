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
    const clone = CopyGraphSingleton.Instance;


    graph.links.forEach((item) => {

        let cloneLink: Link;
        clone.AddData(Object.assign({}, graph.nodes), Object.assign({}, graph.links));

        // clone.links.forEach((element, index) => {
        //   if ((<Node>element.source).id === (<Node>item.source).id && (<Node>element.target).id === (<Node>item.target).id) {
        //     cloneLink = Object.assign({}, element);
        //     clone.links.splice(index, 1);
        //   }
        // });

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
    console.log(criticalLink);
  }

  public runDFS() {
    // const graph = GraphSingleton.Instance;
    // const tree = new Tree(100);
    // graph.nodes.forEach((item, index) => {
    //   console.log('node' + index);
    //   tree.addNode(new TreeNode(Number(item.id) - 1, Number(item.id) - 1));
    // });
    // graph.links.forEach((item, index) => {
    //   console.log('link' + (Number((<Node>item.source).id) - 1 ) + '/' + ( Number((<Node>item.target).id) - 1));
    //   tree.setConnection(Number((<Node>item.source).id) - 1, Number((<Node>item.target).id) - 1);
    //   tree.setConnection(Number((<Node>item.target).id) - 1, Number((<Node>item.source).id) - 1);
    // });
    //
    // console.log(tree.depthFirstSearch());

    const tree = new Tree(100);
    const node1 = new TreeNode(1, 1);
    const node2 = new TreeNode(2, 2);
    const node3 = new TreeNode(3, 3);
    const node4 = new TreeNode(4, 4);
    const node5 = new TreeNode(5, 5);
    const node6 = new TreeNode(6, 6);
    tree.addNode(node1);
    tree.addNode(node2);
    tree.addNode(node3);
    tree.addNode(node4);
    tree.addNode(node5);
    tree.addNode(node6);
    tree.setConnection(0, 1);
    tree.setConnection(0, 2);
    tree.setConnection(1, 3);
    tree.setConnection(1, 4);
    tree.setConnection(2, 4);
    tree.setConnection(3, 4);
    tree.setConnection(3, 5);
    tree.setConnection(4, 5);

    console.log(tree.depthFirstSearch());
  }
}
