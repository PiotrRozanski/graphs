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
    if (this.vertexCount > 2) {
      this.clearGraph();
      this.vertexCount--;
      this.prepareMatrix();
    }
  }

  public checkElementOfMatrix(vertex: number, edge: number): boolean {
    return vertex === edge;
  }

  protected prepareMatrix() {
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


  protected addLink(firstVertex: number, secondVertex: number): void {
    super.addLink(firstVertex, secondVertex);
    this.prepareMatrix();
  }

  protected removeLink(firstVertex: number, secondVertex: number): void {
    super.removeLink(firstVertex, secondVertex);
    this.prepareMatrix();
  }


  protected setMatrix(value: number, firstVertex: number, secondVertex: number): void {
    super.setMatrix(value, firstVertex, secondVertex);
    super.setMatrix(value, secondVertex, firstVertex);
  }
}
