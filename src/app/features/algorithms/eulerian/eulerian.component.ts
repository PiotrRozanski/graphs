import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Node} from '../../../components/graph-visualization/d3/models';

@Component({
  selector: 'app-eulerian',
  templateUrl: './eulerian.component.html',
  styleUrls: ['./eulerian.component.css']
})
export class EulerianComponent implements OnInit {
  private nodesCount;
  private graph: GraphSingleton;
  private adj: Array<number>[] = [[]];
  private result: string;
  private isReady = false;

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  public run() {
    this.result = '';
    this.isReady = false;
    this.nodesCount = 20;

    for (let i = 0; i < this.nodesCount; i++) {
      this.adj[i] = [];
    }

    this.graph.links.forEach((item) => {
      this.addEdge((Number((<Node>item.source).id) - 1), (Number((<Node>item.target).id) - 1));
    });

    this.result = this.printResult(this.isEulerian());
    this.isReady = true;
  }

  public printResult(resultNumber: number): string {
    switch (resultNumber) {
      case 0: {
        return 'Graph is not Eulerian';
      }
      case 1: {
        return 'Graph has a Euler path';
      }
      case 2: {
        return 'Graph has a Euler cycle';
      }
    }
  }

  public addEdge(v: number, w: number): void {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }

  private DFSUtil(count: number, visited: Boolean[]) {
    let index = 0;
    visited[count] = true;

    while (index !== this.adj[count].length + 1) {
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
      if (visited[i] === false && this.adj[i].length > 0) {
        return false;
      }
    }
    return true;
  }

  private isEulerian(): number {
    if (this.isConnected() === false) {
      return 0;
    }

    let odd = 0;

    for (let i = 0; i < this.nodesCount; i++) {
      if ((this.adj[i].length % 2) !== 0) {
        odd++;
      }
    }

    if (odd > 2) {
      return 0;
    }

    return (odd === 2) ? 1 : 2;
  }
}
