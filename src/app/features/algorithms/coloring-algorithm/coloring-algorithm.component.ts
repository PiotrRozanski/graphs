import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../../components/graph-visualization/singletons/GraphSingleton';
import {Node} from '../../../components/graph-visualization/d3/models';
import {Color} from './Color';

@Component({
  selector: 'app-coloring-algorithm',
  templateUrl: './coloring-algorithm.component.html',
  styleUrls: ['./coloring-algorithm.component.css']
})
export class ColoringAlgorithmComponent implements OnInit {
  private graph: GraphSingleton;
  private colorsAmount: number;
  private availableColors: Color[] = [];
  private nodes: Node[] = [];
  private isReady = false;
  private selectedColoringType: number;
  private message: string;

  constructor() {
    this.graph = GraphSingleton.Instance;
  }

  ngOnInit() {
  }

  public run() {
    this.message = 'Algorithm Error';
    this.colorsAmount = this.graph.nodes.length;
    this.nodes = [];
    this.availableColors = [];
    this.isReady = false;
    this.chooseColoringType(this.selectedColoringType);

    for (let i = 0; i < this.colorsAmount; i++) {
      this.availableColors.push(new Color((Math.random() * 255) + 1, (Math.random() * 255) + 1, (Math.random() * 255) + 1));
    }

    for (const graphNode of this.nodes) {
      const usedColors: Map<Color, Boolean> = new Map;

      for (const availableColor of this.availableColors) {
        usedColors.set(availableColor, false);
      }

      for (const adjacencyNode of this.graph.getAdjacencyNodes(graphNode)) {
        if (usedColors.has(adjacencyNode.color)) {
          usedColors.set(adjacencyNode.color, true);
        }
      }

      let isCompleted = false;
      usedColors.forEach((value: Boolean, key: Color) => {
        if (value === false && !isCompleted) {
          graphNode.color = key;
          isCompleted = true;
        }
      });
    }
    this.message = 'The graph is ready';
    this.isReady = true;
  }

  private chooseColoringType(type: number): void {
    switch (type) {
      case 1:
        this.nodes = this.graph.nodes;
        break;
      case 2:
        this.nodes = this.sortInDescOrder(this.graph.nodes);
        break;
      case 3:
        this.nodes = this.shuffleNode(this.graph.nodes);
        break;
      default:
        break;
    }
  }

  private shuffleNode(nodes: Node[]) {
    let j, x, i;
    for (i = nodes.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = nodes[i];
      nodes[i] = nodes[j];
      nodes[j] = x;
    }
    return nodes;
  }

  private sortInDescOrder(nodes: Node[]): Node[] {
    return nodes.sort((a, b) => 0 - (a > b ? 1 : -1));
  }
}
