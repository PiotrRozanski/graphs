import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Link, Node} from '../../../components/graph-visualization/d3/models';
import {createOutput} from '@angular/compiler/src/core';
import {forEach} from '@angular/router/src/utils/collection';
import enumerate = Reflect.enumerate;

@Component({
  selector: 'app-eulerian',
  templateUrl: './eulerian.component.html',
  styleUrls: ['./eulerian.component.css']
})
export class EulerianComponent implements OnInit {
  private nodesCount;
  private graph: GraphSingleton;
  private adj: Array<number>[] = [[]];

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  public run() {
    this.nodesCount = 20;


    for (let i = 0; i < this.nodesCount; i++) {
      this.adj[i] = [];

    }


    // this.graph.links.forEach((item) => {
    //   this.addEdge(Number((<Node>item.source).id) - 1, Number((<Node>item.target).id) - 1);
    // });

    this.addEdge(0, 1);
    this.addEdge(0, 2);
    this.addEdge(0, 4);
    this.addEdge(0, 5);
    this.addEdge(1, 2);
    this.addEdge(1, 3);
    this.addEdge(1, 5);
    this.addEdge(2, 3);
    this.addEdge(2, 4);
    this.addEdge(3, 4);
    this.addEdge(3, 5);
    this.addEdge(4, 5);
    // this.addEdge(3, 4);
    console.log(this.adj);
    console.log('eulerian' + this.isEulerian());
  }

  public addEdge(v: number, w: number): void {
    this.adj[v].push(w); // Add w to v's list.
    this.adj[w].push(v); // The graph is undirected
  }

  private DFSUtil(count: number, visited: Boolean[]) {
    visited[count] = true;


    // Iterator<Integer> i = adj[v].listIterator();
    // while (i.hasNext())
    // {
    //   int n = i.next();
    //   if (!visited[n])
    //     DFSUtil(n, visited);
    // }


    let index = 0;

      while (index !== this.adj[count].length + 1) {
      // console.log('dlusogsc' + this.adj[].length + 1 > this.adj[count].length);
      // console.log(item);

      if (!visited[index + 1]) {
        this.DFSUtil(index + 1, visited);
      }

      index++;

    }
  }


  private isConnected(): Boolean {
    const visited: Boolean[] = [];

    let i = 0;
    for (i = 0; i < this.nodesCount; i++) {
      visited[i] = false;
    }

    for (i = 0; i < this.nodesCount; i++) {
      if (this.adj[i].length !== 0) {
        break;
      }
    }

    if (i === this.nodesCount) {
      return true;
    }

    this.DFSUtil(i, visited);

    for (i = 0; i < this.nodesCount; i++) {
      console.log('bylem');
      if (visited[i] === false && this.adj[i].length > 0) {
        console.log(visited);
        return false;
      }
    }

    return true;

  }

  private isEulerian(): number {
    // Check if all non-zero degree vertices are connected
    if (this.isConnected() === false) {
      console.log('weszlem');
      return 0;
    }

    let odd = 0;

    for (let i = 0; i < this.nodesCount; i++) {
      if ((this.adj[i].length % 2) !== 0) {
        odd++;
      }
    }

    // If count is more than 2, then graph is not Eulerian
    if (odd > 2) {
      return 0;
    }

    // If odd count is 2, then semi-eulerian.
    // If odd count is 0, then eulerian
    // Note that odd count can never be 1 for undirected graph
    return (odd === 2) ? 1 : 2;
  }

  // private getAllNodeWithGraph() {
  //   this.visited = new Map<Node, Boolean>();
  //   this.graph.nodes.forEach((element) => {
  //     this.visited.set(element, false);
  //   });
// }
}
