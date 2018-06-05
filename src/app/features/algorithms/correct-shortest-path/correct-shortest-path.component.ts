import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Link, Node} from '../../../components/graph-visualization/d3/models';

@Component({
  selector: 'app-correct-shortest-path',
  templateUrl: './correct-shortest-path.component.html',
  styleUrls: ['./correct-shortest-path.component.css']
})
export class CorrectShortestPathComponent implements OnInit {
  private graph: GraphSingleton;

  private settledNodes: Set<Node>;
  private unSettledNodes: Set<Node>;
  private predecessors: Map<Node, Node>;
  private distance: Map<Node, Number>;

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  private execute(numberSource: number): void {
    const source = this.graph.findNodeBy(numberSource);
    this.settledNodes = new Set<Node>();
    this.unSettledNodes = new Set<Node>();
    this.distance = new Map<Node, Number>();
    this.predecessors = new Map<Node, Node>();

    this.distance.set(source, 0);
    this.unSettledNodes.add(source);
    while (this.unSettledNodes.size > 0) {
      const node: Node = this.getMinimum(this.unSettledNodes);
      this.settledNodes.add(node);
      this.unSettledNodes.delete(node);
      this.findMinimalDistances(node);
    }
    console.log(this.getPath(this.graph.findNodeBy(4)));
  }

  private findMinimalDistances(node: Node): void {
    const adjacencyNodes: Node[] = this.graph.getAdjacencyNodes(node);

    for (const target of adjacencyNodes) {
      if (this.getShortestDistance(target) > this.getShortestDistance(node) + this.getDistance(node, target)) {
        this.distance.set(target, this.getShortestDistance(node) + this.getDistance(node, target));
        this.predecessors.set(target, node);
        this.unSettledNodes.add(target);
      }
    }
  }

  private getDistance(node: Node, target: Node): number {
    for (const link of this.graph.links) {
      if (link.source === node && link.target === target) {
        return link.weight;
      }
    }
    // throw new RuntimeException("Should not happen");
  }

  private getMinimum(nodes: Set<Node>): Node {
    let minimum: Node = null;

    nodes.forEach( (node) => {
      if (minimum === null) {
        minimum = node;
      } else {
        if (this.getShortestDistance(node) < this.getShortestDistance(minimum)) {
          minimum = node;
        }
      }
    });
    return minimum;
  }

  private getShortestDistance(destination: Node): number {
    // Integer d = distance.get(destination);
    const dest: Number = this.distance.get(destination);
    if (dest == null) {
      return Number.MAX_VALUE;
    } else {
      return Number(dest);
    }
  }

  public getPath(target: Node): Node[] {
    let path: Node[] = [];
    let step: Node = target;
    if (this.predecessors.get(step) === null) {
      return null;
    }
    path.push(step);
    while (this.predecessors.get(step) != null) {
      step = this.predecessors.get(step);
      path.push(step);
    }
    path.reverse();
    return path;
  }
}
