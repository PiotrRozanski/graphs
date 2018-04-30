import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Link, Node} from '../../components/graph-visualization/d3/models';
import {MatSnackBar} from '@angular/material';
import {GraphModel} from '../../components/graph_model/GraphModel';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Input() graph: GraphModel;
  @Output() isCreatedGraph = new EventEmitter<Boolean>();
  nodes: Node[] = [];
  links: Link[] = [];
  isEnable = false;

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  generateGraph() {
    for (let i = 0; i < this.graph.nodes.length; i++) {
      this.nodes.push(new Node(i + 1));
      console.log('nodes' + i);
    }
    for (let j = 0; j < this.graph.links.length; j++) {
      const source = this.graph.links[j].source;
      const target = this.graph.links[j].target;
      this.prepareLinks(source, target);
      console.log('source' + source);
      console.log('target' + target);

    }
    this.isEnable = true;
    this.isCreatedGraph.emit(this.isEnable);
  }

  private prepareNodes() {

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

  clearGraphElements() {
    this.links = [];
    this.nodes = [];
  }
}
