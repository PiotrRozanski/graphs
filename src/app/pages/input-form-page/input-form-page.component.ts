import {Component, OnInit} from '@angular/core';
import {GraphModel} from '../../components/graph_model/GraphModel';

@Component({
  selector: 'app-input-form-page',
  templateUrl: './input-form-page.component.html',
  styleUrls: ['./input-form-page.component.css']
})
export class InputFormPageComponent implements OnInit {
  graph: GraphModel;


  constructor() {
  }

  ngOnInit() {
  }

  onCreatedForm(graph: GraphModel) {
    this.graph = graph;
    console.log(this.graph.nodes.length);
    console.log(this.graph.links.length);
  }
}
