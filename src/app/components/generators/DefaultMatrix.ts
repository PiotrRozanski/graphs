import {ElementOfTable} from '../graph_model/ElementOfTable';
import {EventEmitter, Output} from '@angular/core';

export class DefaultMatrix {
  @Output() elementsOfMatrix: EventEmitter<ElementOfTable[][]> = new EventEmitter();
  matrix: ElementOfTable[][] = [[]];

  constructor() {
  }

  protected setField(value: number, vertex: number, edge: number) {
    this.matrix[vertex][edge].value = value;
  }

  protected clearMatrix() {
    this.matrix = [[]];
  }
}
