import {Component, OnInit} from '@angular/core';
import {ElementOfTable} from '../../components/graph_model/ElementOfTable';
import {GraphModel} from '../../components/graph_model/GraphModel';

@Component({
  selector: 'app-incidence-matrix-page',
  templateUrl: './incidence-matrix-page.component.html',
  styleUrls: ['./incidence-matrix-page.component.css']
})
export class IncidenceMatrixPageComponent implements OnInit {
  public graph: GraphModel = new GraphModel();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onCreatedMatrix(graph: GraphModel) {
    this.graph = graph;
  }

}
