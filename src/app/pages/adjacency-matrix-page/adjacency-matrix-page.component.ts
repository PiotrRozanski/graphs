import {Component, OnInit} from '@angular/core';
import {GraphModel} from '../../components/graph_model/GraphModel';

@Component({
  selector: 'app-adjacency-matrix-page',
  templateUrl: './adjacency-matrix-page.component.html',
  styleUrls: ['./adjacency-matrix-page.component.css'],
})
export class AdjacencyMatrixPageComponent implements OnInit {
  public graph: GraphModel = new GraphModel();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onCreatedMatrix(graph: GraphModel) {
    this.graph = graph;
  }

}
