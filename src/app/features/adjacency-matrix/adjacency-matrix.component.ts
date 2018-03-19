import {Component, Input, OnInit} from '@angular/core';
import {ElementOfTable} from '../../components/matrices/matrix/ElementOfTable';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-adjacency-matrix',
  templateUrl: './adjacency-matrix.component.html',
  styleUrls: ['./adjacency-matrix.component.css']
})
export class AdjacencyMatrixComponent implements OnInit {
  @Input() elements: ElementOfTable[][];
  wasGenerated = false;
  nodes: Node[] = [];
  links: Link[] = [];

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  generateGraph() {
    this.nodes = [];
    this.links = [];
    for (let i = 0; i < this.elements.length; i++) {
      for (let j = 0; j < this.elements[i].length; j++) {
        if (this.elements[i][j].elementValue === 1) {
          if (this.elements[i][j].elementValue !== this.elements[j][i].elementValue) {
            this.openSnackBar('ERROR: Incorrect values in the adjacency matrix');
            return;
          } else {
            this.prepareLinks(i + 1, j + 1);
          }

        }
      }
    }
    this.prepareNodes();
    this.validateAdjacencyMatrix();
  }

  prepareNodes() {
    for (let i = 0; i < this.elements.length; i++) {
      this.nodes.push(new Node(i + 1));
      console.log(i + 1);
    }
  }

  prepareLinks(source: number, target: number) {
    this.links.push(new Link(source, target));
  }

  openSnackBar(info: string) {
    this.snackBar.open(info, null, {
      duration: 3000
    });
  }

  // Todo zastanowić się jak to zlikwidować
  disableGraph() {
    this.wasGenerated = false;
  }

  validateAdjacencyMatrix() {
    if (this.elements.length > this.links.length) {
      this.openSnackBar('ERROR: Incorrect values in the adjacency matrix');
      this.links = [];
      this.nodes = [];
      this.wasGenerated = false;
    } else {
      this.wasGenerated = true;
    }
  }
}
