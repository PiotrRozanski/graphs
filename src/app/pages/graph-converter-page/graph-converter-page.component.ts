import {Component, OnInit} from '@angular/core';
import {GraphSingleton} from '../../components/graph-visualization/singletons/GraphSingleton';
import {Link, Node} from '../../components/graph-visualization/d3/models';

@Component({
  selector: 'app-graph-converter-page',
  templateUrl: './graph-converter-page.component.html',
  styleUrls: ['./graph-converter-page.component.css']
})
export class GraphConverterPageComponent implements OnInit {
  private isGraphInMemory = false;
  public nodes: Node[] = [];
  public links: Link[] = [];

  constructor() {
    this.checkMemeory();
  }

  ngOnInit() {
  }

  private checkMemeory() {
    if (GraphSingleton.Instance.nodes.length > 0) {
      this.nodes = GraphSingleton.Instance.nodes;
      this.links = GraphSingleton.Instance.links;
      this.isGraphInMemory = true;
    }
  }
}
