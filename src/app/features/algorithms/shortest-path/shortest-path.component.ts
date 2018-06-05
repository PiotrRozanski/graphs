import {Component, OnInit} from '@angular/core';
import {Link, Node} from '../../../components/graph-visualization/d3/models';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';

@Component({
  selector: 'app-shortest-path',
  templateUrl: './shortest-path.component.html',
  styleUrls: ['./shortest-path.component.css']
})
export class ShortestPathComponent implements OnInit {
  private graph: GraphSingleton;
  private tmp: Map<Node, number> = new Map<Node, number>();

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  private execute(): Boolean {
    let isNext: Boolean = false;

    for (const fromNode of this.graph.nodes) {
      const links: Link[] = [];

      this.graph.links.forEach((item) => {
        if ((<Node>item.source).id === fromNode.id) {
          links.push(item);
        }
      });

      for (const link of this.graph.links) {

        let potentialCost: number;

        if (this.tmp.get((<Node>link.source)) === Number.MAX_VALUE) {
          potentialCost = Number.MAX_VALUE;
        } else {
          potentialCost = this.tmp.get((<Node>link.target)) + link.weight;
        }

        if (potentialCost >= this.tmp.get((<Node>link.target))) {
          continue;
        }
        this.tmp.set((<Node>link.target), potentialCost);

        isNext = true;
      }
    }

    return isNext;
  }

  public findShortestPath(nodeNumber: number): void {
    const startNode: Node = this.graph.findNodeBy(nodeNumber);

    for (const node of this.graph.nodes) {
      if (node.id === startNode.id) {
        this.tmp.set(node, 0);
      } else {
        this.tmp.set(node, Number.MAX_VALUE);
      }
    }

    for (let i = 0; i < this.graph.nodes.length; i++) {
      if (!this.execute()) {
        break;
      }
    }

    // for (const keyValue of this.tmp) {
    //   if (!keyValue.equals(startNode)) {
    //     console.log(startNode.id + '-->' + keyValue + ': ' + keyValue);
    //   }
    // }

    this.tmp.forEach( (value: number, key: Node) => {
      if (!(key === startNode)) {
        console.log(startNode.id + '-->' + key.id + ': ' + value);
      }
    });
  }

}
