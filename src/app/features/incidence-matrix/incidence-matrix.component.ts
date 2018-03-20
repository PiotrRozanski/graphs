import {Component, Input, OnInit} from '@angular/core';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {ElementOfTable} from '../../components/matrices/matrix/ElementOfTable';

@Component({
  selector: 'app-incidence-matrix',
  templateUrl: './incidence-matrix.component.html',
  styleUrls: ['./incidence-matrix.component.css']
})
export class IncidenceMatrixComponent implements OnInit {
  @Input() elements: ElementOfTable[][];
  wasGenerated = false;
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  generateGraph() {

  }

  disableGraph() {
    this.wasGenerated = false;
  }
}
