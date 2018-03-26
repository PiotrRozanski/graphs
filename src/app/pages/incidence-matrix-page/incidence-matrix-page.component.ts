import {Component, OnInit} from '@angular/core';
import {ElementOfTable} from '../../components/generators/elements/ElementOfTable';

@Component({
  selector: 'app-incidence-matrix-page',
  templateUrl: './incidence-matrix-page.component.html',
  styleUrls: ['./incidence-matrix-page.component.css']
})
export class IncidenceMatrixPageComponent implements OnInit {
  elements: ElementOfTable[][];

  constructor() {
  }

  ngOnInit() {
  }

  onCreatedMatrix(elementsOfMatrix: ElementOfTable[][]) {
    this.elements = elementsOfMatrix;
  }
}
