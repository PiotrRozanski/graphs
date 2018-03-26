import {ElementOfTable} from './elements/ElementOfTable';
import {EventEmitter, Output} from '@angular/core';

export class Matrix {
  @Output() elementsOfMatrix: EventEmitter<ElementOfTable[][]> = new EventEmitter();
  matrix: ElementOfTable[][] = [[]];

  constructor() {
  }

  public setField(value: number, vertex: number, edge: number) {
    this.matrix[vertex][edge].value = value;
  }

  protected clearMatrix() {
    this.matrix = [[]];
  }
}
