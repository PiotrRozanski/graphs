import {Component, Input, OnInit} from '@angular/core';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {MatSnackBar} from '@angular/material';
import {GraphModel} from '../../components/graph_model/GraphModel';

@Component({
  selector: 'app-incidence-matrix',
  templateUrl: './incidence-matrix.component.html',
  styleUrls: ['./incidence-matrix.component.css']
})
export class IncidenceMatrixComponent implements OnInit {
  @Input() graph: GraphModel;
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
    for (let i = 0; i < this.graph.links.length; i++) {
      const source = this.graph.links[i].source;
      const target = this.graph.links[i].target;
      this.prepareLinks(source, target);
    }
    this.prepareNodes();
    this.isEnable = true;
  }

  private sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  private prepareNodes() {
    for (let id = 0; id < this.graph.nodes.length; id++) {
      this.nodes.push(new Node(id + 1));
    }
  }

  private prepareLinks(source: number, target: number) {
    this.links.push(new Link(source + 1, target + 1));
  }

  private openSnackBar(info: string) {
    this.snackBar.open(info, null, {
      duration: 3000
    });
  }

  clearGraphElements() {
    this.links = [];
    this.nodes = [];
  }

}
