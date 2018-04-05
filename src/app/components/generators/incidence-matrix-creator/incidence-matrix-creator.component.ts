import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ElementOfTable} from '../../graph_model/ElementOfTable';
import {Vertex} from '../../graph_model/Vertex';
import {Edge} from '../../graph_model/Edge';
import {DefaultMatrix} from '../DefaultMatrix';
import {Matrix} from '../Matrix';
import {GraphModel} from '../../graph_model/GraphModel';

@Component({
  selector: 'app-incidence-matrix-creator',
  templateUrl: './incidence-matrix-creator.component.html',
  styleUrls: ['./incidence-matrix-creator.component.css']
})
// Todo zmienic dodawanie wierszy i kolumn
export class IncidenceMatrixCreatorComponent extends Matrix implements OnInit {
  @Output() graphEvent: EventEmitter<GraphModel> = new EventEmitter();
  private verticesCount = 3;
  private edgesCount = 2;

  constructor() {
    super();
  }

  ngOnInit() {
    this.prepareMatrix();
  }

  // ToDo addVertex i addEdge zamienic na jedną metodę
  public addVertex() {
    this.matrix = [];
    this.verticesCount++;
    if (this.verticesCount === this.edgesCount) {
      this.verticesCount++;
    }
    this.prepareMatrix();
  }

  public removeVertex() {
    if (this.verticesCount > 2) {
      this.matrix = [];
      this.verticesCount--;
      if (this.verticesCount === this.edgesCount) {
        this.verticesCount--;
      }
      this.prepareMatrix();
    }
  }

  public addEdge() {
    this.matrix = [];
    this.edgesCount++;
    if (this.verticesCount === this.edgesCount) {
      this.edgesCount++;
    }
    this.prepareMatrix();
  }

  public removeEdge() {
    if (this.edgesCount > 2) {
      this.matrix = [];
      this.edgesCount--;
      if (this.verticesCount === this.edgesCount) {
        this.edgesCount--;
      }
      this.prepareMatrix();
    }
  }

  protected prepareMatrix() {
    this.matrix = [[]];
    for (let i = 0; i < this.verticesCount; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.edgesCount; j++) {
        this.matrix[i][j] = 0;
      }
    }
    this.addVertices(this.verticesCount);
    this.graphEvent.emit(this.graph);
  }


  protected addLink(vertex: number, edge: number): void {
    if (!this.validateMatrix(edge)) {
      return;
    }
    this.setMatrix(1, vertex, edge);
    for (let i = 0; i < this.verticesCount; i++) {
      if (this.matrix[i][edge] === 1 && i !== vertex) {
        super.addLink(i, vertex);
      }
    }
  }

  protected removeLink(vertex: number, edge: number): void {
    this.setMatrix(0, vertex, edge);
    for (let i = 0; i < this.verticesCount; i++) {
      if (this.matrix[i][edge] === 1 && i !== vertex) {
        super.removeLink(i, vertex);
      }
    }
  }

  private validateMatrix(edge: number): boolean {
    let count = 0;
    for (let i = 0; i < this.verticesCount; i++) {
      if (this.matrix[i][edge] === 1) {
        count++;
      }
    }
    return count < 2;
  }
}
