import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ElementOfTable} from './ElementOfTable';


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input() tableTitle: string;
  @Output() elementsOfMatrix: EventEmitter<ElementOfTable[][]> = new EventEmitter();
  matrix: ElementOfTable[][] = [[]];
  index = 2;

  constructor() {
  }

  ngOnInit() {
    this.prepareMatrix();
  }

  public increaseMatrix() {
    this.matrix = [[]];
    this.index++;
    this.prepareMatrix();
  }

  public decreaseMatrix() {
    if (this.index > 1) {
      this.matrix = [[]];
      this.index--;
      this.prepareMatrix();
    }
  }

  private prepareMatrix() {
    for (let i = 0; i < this.index; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.index; j++) {
        this.matrix[i][j] = new ElementOfTable(0, i + 1, j + 1);
      }
    }
    this.elementsOfMatrix.emit(this.matrix);
  }

  public setField(elementValue: number, firstDimensionTable: number, twiceDimensionTable: number) {
    this.matrix[firstDimensionTable - 1][twiceDimensionTable - 1].elementValue = elementValue;
  }

  checkElementOfMatrix(x: number, y: number): boolean {
    if (this.tableTitle === 'Adjacency matrix') {
      return x !== y;
    }
    return true;
  }
}
