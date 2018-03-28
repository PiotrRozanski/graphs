import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ElementOfTable} from '../../graph_model/ElementOfTable';
import {Vertex} from '../../graph_model/Vertex';
import {Edge} from '../../graph_model/Edge';
import {Matrix} from '../Matrix';


@Component({
  selector: 'app-adjacency-matrix-creator',
  templateUrl: './adjacency-matrix-creator.component.html',
  styleUrls: ['./adjacency-matrix-creator.component.css']
})
export class AdjacencyMatrixCreatorComponent extends Matrix implements OnInit {
  index = 2;

  constructor() {
    super();
  }

  ngOnInit() {
    this.prepareMatrix();
  }

  public increaseMatrix() {
    this.clearMatrix();
    this.index++;
    this.prepareMatrix();
  }

  public decreaseMatrix() {
    if (this.index > 1) {
      this.clearMatrix();
      this.index--;
      this.prepareMatrix();
    }
  }

  private prepareMatrix() {
    for (let vertexID = 0; vertexID < this.index; vertexID++) {
      this.matrix[vertexID] = [];
      for (let edgeID = 0; edgeID < this.index; edgeID++) {
        const vertex: Vertex = new Vertex(vertexID, vertexID.toString());
        const edge: Edge = new Edge(edgeID, 1);
        this.matrix[vertexID][edgeID] = new ElementOfTable(0, vertex, edge);
      }
    }
    this.elementsOfMatrix.emit(this.matrix);
  }

  public checkElementOfMatrix(vertex: number, edge: number): boolean {
    return vertex !== edge;
  }
}
