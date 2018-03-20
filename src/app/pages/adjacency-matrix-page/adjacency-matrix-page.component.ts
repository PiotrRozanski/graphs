import {Component, Input, OnInit} from '@angular/core';
import APP_CONFIG from '../../app.config';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {ElementOfTable} from '../../components/matrices/matrix/ElementOfTable';

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
