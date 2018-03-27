import {Component, Input, OnInit} from '@angular/core';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {ElementOfTable} from '../../components/generators/elements/ElementOfTable';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-incidence-matrix',
  templateUrl: './incidence-matrix.component.html',
  styleUrls: ['./incidence-matrix.component.css']
})
export class IncidenceMatrixComponent implements OnInit {
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
    this.prepareNodes();
    this.validateIncidenceMatrix();
    for (let edge = 0; edge < this.elements[0].length; edge++) {
      this.checkLinks(edge);
    }
    this.checkMatrixVertices();
  }

  private prepareNodes() {
    for (let id = 0; id < this.elements.length; id++) {
      this.nodes.push(new Node(id + 1));
    }
  }

  private checkLinks(edge: number) {
    const link: number[] = [];
    for (let vertex = 0; vertex < this.elements.length; vertex++) {
      if (this.elements[vertex][edge].value === 1) {
        link.push(vertex + 1);
      }
    }
    this.prepareLinks(link[0], link[1]);
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

  private validateIncidenceMatrix(): boolean {
    let edgeCount = 0;
    let vertexCount = 0;
    for (let edge = 0; edge < this.elements[0].length; edge++) {
      for (let vertex = 0; vertex < this.elements.length; vertex++) {

        if (this.elements[vertex][edge].value === 1) {
          edgeCount++;
        }
      }
      if (vertexCount <= this.elements.length) {
        vertexCount++;
      }
      this.checkMatrixEdges(edgeCount);
      edgeCount = 0;
    }
    return true;
  }

  private checkMatrixEdges(edgeCount: number) {
    if (edgeCount !== 2) {
      this.openSnackBar('ERROR: Incorrect values in the incidence matrix. The incident matrix must not have more than two edges');
      this.clearGraphElements();
      this.isEnable = false;
    } else {
      this.isEnable = true;
    }
  }

  private checkMatrixVertices() {
    for (let vertex = 0; vertex < this.elements.length; vertex++) {
      let vertexCount = 0;
      for (let edge = 0; edge < this.elements[vertex].length; edge++) {
        if (this.elements[vertex][edge].value === 1) {
          vertexCount++;
        }
      }
      if (vertexCount === 0) {
        this.openSnackBar('ERROR: Incorrect values in the incidence matrix');
        this.isEnable = false;
        return;
      }
    }
    this.isEnable = true;
  }

  clearGraphElements() {
    this.links = [];
    this.nodes = [];
  }

}
