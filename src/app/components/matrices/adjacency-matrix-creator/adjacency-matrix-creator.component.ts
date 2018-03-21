import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ElementOfTable} from '../ElementOfTable';


@Component({
  selector: 'app-adjacency-matrix-creator',
  templateUrl: './adjacency-matrix-creator.component.html',
  styleUrls: ['./adjacency-matrix-creator.component.css']
})
export class AdjacencyMatrixCreatorComponent implements OnInit {
  @Output() elementsOfMatrix: EventEmitter<ElementOfTable[][]> = new EventEmitter();
  matrix: ElementOfTable[][] = [[]];
  index = 2;

  constructor() {
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
    for (let vertex = 0; vertex < this.index; vertex++) {
      this.matrix[vertex] = [];
      for (let edge = 0; edge < this.index; edge++) {
        this.matrix[vertex][edge] = new ElementOfTable(0, vertex + 1, edge + 1);
      }
    }
    this.elementsOfMatrix.emit(this.matrix);
  }

  public setField(elementValue: number, vertex: number, edge: number) {
    this.matrix[vertex - 1][edge - 1].elementValue = elementValue;
  }

  private checkElementOfMatrix(vertex: number, edge: number): boolean {
    return vertex !== edge;
  }

  private clearMatrix() {
    this.matrix = [[]];
  }
}
