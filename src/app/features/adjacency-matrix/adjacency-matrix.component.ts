import {Component, Input, OnInit} from '@angular/core';
import {ElementOfTable} from '../../components/matrices/matrix/ElementOfTable';
import {Link, Node} from '../../components/graph-visualization/d3/models';

@Component({
  selector: 'app-adjacency-matrix',
  templateUrl: './adjacency-matrix.component.html',
  styleUrls: ['./adjacency-matrix.component.css']
})
export class AdjacencyMatrixComponent implements OnInit {
  @Input() elements: ElementOfTable[][];
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
  }

  ngOnInit() {
    this.prepareNodes();
    this.links.push(new Link(1, 2));
    this.links.push(new Link(1, 3));
    this.links.push(new Link(2, 3));
    this.links.push(new Link(2, 4));
    this.links.push(new Link(4, 3));
    this.links.push(new Link(1, 5));

  }

  prepareNodes() {
    this.elements.forEach((items, index) => {
      this.nodes.push(new Node(index + 1));
    });
  }

}
