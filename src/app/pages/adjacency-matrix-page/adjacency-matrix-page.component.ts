import {Component, OnInit} from '@angular/core';
import {ElementOfTable} from '../../components/matrices/elements/ElementOfTable';

@Component({
  selector: 'app-adjacency-matrix-page',
  templateUrl: './adjacency-matrix-page.component.html',
  styleUrls: ['./adjacency-matrix-page.component.css']
})
export class AdjacencyMatrixPageComponent implements OnInit {
  elements: ElementOfTable[][];

  constructor() {
  }

  ngOnInit(): void {
  }

  onCreatedMatrix(elementsOfMatrix: ElementOfTable[][]) {
    this.elements = elementsOfMatrix;
  }

}
