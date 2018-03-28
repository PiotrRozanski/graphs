import {Component, Input, OnInit} from '@angular/core';
import {ElementOfTable} from '../../components/graph_model/ElementOfTable';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-adjacency-matrix',
  templateUrl: './adjacency-matrix.component.html',
  styleUrls: ['./adjacency-matrix.component.css']
})
export class AdjacencyMatrixComponent implements OnInit {
  @Input() elements: ElementOfTable[][];
  isEnable = false;
  nodes: Node[] = [];
  links: Link[] = [];

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  generateGraph() {
    this.clearGraphElements();
    for (let vertex = 0; vertex < this.elements.length; vertex++) {
      for (let edge = 0; edge < this.elements[vertex].length; edge++) {
        if (this.elements[vertex][edge].value === 1) {
          if (this.elements[vertex][edge].value !== this.elements[edge][vertex].value) {
            this.openSnackBar('ERROR: Incorrect values in the adjacency matrix');
            return;
          } else {
            this.prepareLinks(vertex + 1, edge + 1);
          }
        }
      }
    }
    this.prepareNodes();
    this.validateAdjacencyMatrix();
  }

  private prepareNodes() {
    for (let id = 0; id < this.elements.length; id++) {
      this.nodes.push(new Node(id + 1));
    }
  }

  private prepareLinks(source: number, target: number) {
    this.links.push(new Link(source, target));
  }

  private openSnackBar(info: string) {
    this.snackBar.open(info, null, {
      duration: 3000
    });
  }

  // Todo zastanowić się jak to zlikwidować
  private disableGraph() {
    this.isEnable = false;
  }

  private validateAdjacencyMatrix() {
    if (this.elements.length > this.links.length) {
      this.openSnackBar('ERROR: Incorrect values in the adjacency matrix');
      this.clearGraphElements();
      this.isEnable = false;
    } else {
      this.isEnable = true;
    }
  }

  clearGraphElements() {
    this.links = [];
    this.nodes = [];
  }
}
