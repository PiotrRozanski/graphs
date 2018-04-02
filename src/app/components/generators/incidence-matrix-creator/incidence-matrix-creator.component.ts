import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ElementOfTable} from '../../graph_model/ElementOfTable';
import {Vertex} from '../../graph_model/Vertex';
import {Edge} from '../../graph_model/Edge';
import {DefaultMatrix} from '../DefaultMatrix';

@Component({
  selector: 'app-incidence-matrix-creator',
  templateUrl: './incidence-matrix-creator.component.html',
  styleUrls: ['./incidence-matrix-creator.component.css']
})
// Todo zmienic dodawanie wierszy i kolumn
export class IncidenceMatrixCreatorComponent extends DefaultMatrix implements OnInit {
  verticesCount = 3;
  edgesCount = 2;

  constructor() {
    super();
  }

  ngOnInit() {
    this.prepareMatrix();
  }

  public addVertex() {
    this.clearMatrix();
    this.verticesCount++;
    if (this.verticesCount === this.edgesCount) {
      this.verticesCount++;
    }
    this.prepareMatrix();
  }

  public removeVertex() {
    if (this.verticesCount > 1) {
      this.clearMatrix();
      this.verticesCount--;
      if (this.verticesCount === this.edgesCount) {
        this.verticesCount--;
      }
      this.prepareMatrix();
    }
  }

  public addEdge() {
    this.clearMatrix();
    this.edgesCount++;
    if (this.verticesCount === this.edgesCount) {
      this.edgesCount++;
    }
    this.prepareMatrix();
  }

  public removeEdge() {
    if (this.edgesCount > 1) {
      this.clearMatrix();
      this.edgesCount--;
      if (this.verticesCount === this.edgesCount) {
        this.edgesCount--;
      }
      this.prepareMatrix();
    }
  }

  private prepareMatrix() {
    for (let vertexID = 0; vertexID < this.verticesCount; vertexID++) {
      this.matrix[vertexID] = [];
      for (let edgeID = 0; edgeID < this.edgesCount; edgeID++) {
        const vertex: Vertex = new Vertex(vertexID, vertexID.toString());
        const edge: Edge = new Edge(edgeID, 1);
        this.matrix[vertexID][edgeID] = new ElementOfTable(0, vertex, edge);
      }
    }
    if ((this.verticesCount - this.edgesCount) === 1 || (this.verticesCount - this.edgesCount) === -1) {
      this.elementsOfMatrix.emit(this.matrix);
    }
  }
}
