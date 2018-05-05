import {Component, OnInit} from '@angular/core';
import {GraphModel} from '../../components/graph_model/GraphModel';

@Component({
  selector: 'app-input-form-page',
  templateUrl: './input-form-page.component.html',
  styleUrls: ['./input-form-page.component.css']
})
export class InputFormPageComponent implements OnInit {
  graph: GraphModel;
  public isCreatedGraph: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onCreatedForm(graph: GraphModel) {
    this.graph = graph;
  }

  public checkGraph(isGraph: Boolean) {
    this.isCreatedGraph = isGraph;
  }
}
