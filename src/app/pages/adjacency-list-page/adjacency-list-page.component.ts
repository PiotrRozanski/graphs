import { Component, OnInit } from '@angular/core';
import {ElementOfTable} from '../../components/generators/elements/ElementOfTable';

@Component({
  selector: 'app-adjacency-list-page',
  templateUrl: './adjacency-list-page.component.html',
  styleUrls: ['./adjacency-list-page.component.css']
})
export class AdjacencyListPageComponent implements OnInit {
  elements: ElementOfTable[];

  constructor() { }

  ngOnInit() {
  }

  onCreatedMatrix(elementsOfMatrix: ElementOfTable[]) {
    this.elements = elementsOfMatrix;
  }
}
