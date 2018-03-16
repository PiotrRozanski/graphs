import {Component, Input, OnInit} from '@angular/core';
import {ElementOfTable} from './ElementOfTable';


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input()
  tableTitle: string;
  index = 5;
  matrix: ElementOfTable[][] = [[]];

  constructor() {
    this.prepareMatrix();
  }

  ngOnInit() {
  }

  public increaseMatrix() {
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
  }

  public setField(elementValue: number, firstDimensionTable: number, twiceDimensionTable: number) {
    this.matrix[firstDimensionTable - 1][twiceDimensionTable - 1].elementValue = elementValue;
  }
}
