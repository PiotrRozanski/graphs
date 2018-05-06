import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {MatSnackBar} from '@angular/material';
import {GraphModel} from '../../components/graph_model/GraphModel';

@Component({
  selector: 'app-adjacency-matrix',
  templateUrl: './adjacency-matrix.component.html',
  styleUrls: ['./adjacency-matrix.component.css']
})
export class AdjacencyMatrixComponent implements OnInit {
  @Input() graph: GraphModel;
  @Output() isCreatedGraph = new EventEmitter<Boolean>();
  isEnable = false;
  nodes: Node[] = [new Node(1), new Node(2), new Node(3), new Node(4), new Node(5), new Node(6), new Node(7)];
  links: Link[] = [new Link(1, 6), new Link(1, 2), new Link(1, 5), new Link(1, 7),
                   new Link(2, 7), new Link(2, 3), new Link(2, 4),
                   new Link(3, 4),
                   new Link(4, 5), new Link(4, 7),
                   new Link(5, 6), new Link(5, 7)];

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  async generateGraph() {
    // this.clearGraphElements();
    await this.sleep(1);
    // for (let i = 0; i < this.graph.links.length; i++) {
    //   const source = this.graph.links[i].source;
    //   const target = this.graph.links[i].target;
    //   this.prepareLinks(source, target);
    // }
    // this.prepareNodes();
    this.isEnable = true;
    this.isCreatedGraph.emit(this.isEnable);
  }

  // The program needs time to remove previously graph
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

  // ToDo add validation for adjacency matrix
  // private validateAdjacencyMatrix(): boolean {
  //   if (this.graph.links.length < this.graph.nodes.length - 1) {
  //     this.openSnackBar('ERROR: Incorrect values in the adjacency matrix');
  //     this.clearGraphElements();
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }


  private clearGraphElements() {
    this.links = [];
    this.nodes = [];
  }
}
