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

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= 5; i++) {
      this.nodes.push(new Node(i));
    }

    // for (let i = 1; i <= N; i++) {
    //   for (let m = 2; i * m <= N; m++) {
    //     /** increasing connections toll on connecting nodes */
    //     this.nodes[getIndex(i)].linkCount++;
    //     this.nodes[getIndex(i * m)].linkCount++;

    /** connecting the nodes before starting the simulation */
    this.links.push(new Link(1, 2));
    this.links.push(new Link(1, 3));
    this.links.push(new Link(2, 3));
    this.links.push(new Link(2, 4));
    this.links.push(new Link(4, 3));
    this.links.push(new Link(1, 5));
    //   }
    // }
  }

  ngOnInit(): void {
  }

  onCreatedMatrix(elementsOfMatrix: ElementOfTable[][]) {
    this.elements = elementsOfMatrix;
  }

}
