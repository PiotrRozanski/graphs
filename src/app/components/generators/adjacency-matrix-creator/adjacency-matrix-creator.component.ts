import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Matrix} from '../Matrix';
import {GraphModel} from '../../graph_model/GraphModel';


@Component({
  selector: 'app-adjacency-matrix-creator',
  templateUrl: './adjacency-matrix-creator.component.html',
  styleUrls: ['./adjacency-matrix-creator.component.css']
})
export class AdjacencyMatrixCreatorComponent extends Matrix implements OnInit {
  @Output() graphEvent: EventEmitter<GraphModel> = new EventEmitter();
  matrix: number[][] = [[]];
  vertexCount = 3;

  constructor() {
    super();
  }

  ngOnInit() {
    this.prepareMatrix();
  }

  public increaseMatrix() {
    this.vertexCount++;
    this.prepareMatrix();
  }

  public decreaseMatrix() {
    if (this.vertexCount > 1) {
      this.clearGraph();
      this.vertexCount--;
      this.prepareMatrix();
    }
  }

  private prepareMatrix() {
    this.matrix = [[]];
    for (let i = 0; i < this.vertexCount; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.vertexCount; j++) {
        this.matrix[i][j] = 0;
      }
    }
    this.addVertices(this.vertexCount);
    this.setLinksForMatrix();
    this.graphEvent.emit(this.graph);
  }

  private setLinksForMatrix(): void {
    for (let i = 0; i < this.graph.links.length; i++) {
      const source = this.graph.links[i].source;
      const target = this.graph.links[i].target;
      this.setMatrix(1, source, target);
    }
  }

  protected addLink(firstVertex: number, secondVertex: number): void {
    super.addLink(firstVertex, secondVertex);
    this.prepareMatrix();
  }

  protected removeLink(firstVertex: number, secondVertex: number): void {
    super.removeLink(firstVertex, secondVertex);
    this.prepareMatrix();
  }

  private setMatrix(value: number, firstVertex: number, secondVertex: number) {
    this.matrix[firstVertex][secondVertex] = value;
    this.matrix[secondVertex][firstVertex] = value;
  }

  public checkElementOfMatrix(vertex: number, edge: number): boolean {
    return vertex === edge;
  }
}
