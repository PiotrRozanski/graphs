import {Component, Input, OnInit} from '@angular/core';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {MatSnackBar} from '@angular/material';
import {ElementOfTable} from '../../components/graph_model/ElementOfTable';

@Component({
  selector: 'app-adjacency-list',
  templateUrl: './adjacency-list.component.html',
  styleUrls: ['./adjacency-list.component.css']
})
export class AdjacencyListComponent implements OnInit {
  @Input() elements: ElementOfTable[];
  isEnable = false;
  nodes: Node[] = [];
  links: Link[] = [];

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  async generateGraph() {
    this.isEnable = false;
    this.clearGraphElements();
    await this.sleep(1);
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].value === 1) {
        this.prepareLinks(this.elements[i].vertex.id, this.elements[i].edge.id);
      }
    }
    this.prepareNodes();
    this.isEnable = true;
  }

  private prepareNodes() {
    const lastElement: ElementOfTable = this.elements[this.elements.length - 1];
    for (let id = 0; id < lastElement.vertex.id; id++) {
      this.nodes.push(new Node(id + 1));
    }
  }

  // The program needs time to remove previously graph
  private sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
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
