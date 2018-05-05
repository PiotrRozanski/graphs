import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {GraphModel} from '../../graph_model/GraphModel';
import {Link} from '../../graph_model/Link';
import {Vertex} from '../../graph_model/Vertex';


@Component({
  selector: 'app-input-form-creator',
  templateUrl: './input-form-creator.component.html',
  styleUrls: ['./input-form-creator.component.css']
})
export class InputFormCreatorComponent implements OnInit, OnChanges {
  @Output() graphModel: EventEmitter<GraphModel> = new EventEmitter();

  inputText: string[] = [];

  graph: GraphModel = new GraphModel();

  nodes: Vertex[] = [];
  links: Link[] = [];

  nodeAmount = 2;
  linkAmount = 1;


  constructor() {
  }

  ngOnInit() {
    this.prepareGraph();
  }

  increaseNodeAmount() {
    this.clearGraph();
    this.nodeAmount++;
    this.prepareGraph();
  }

  increaseLinkAmount() {
    this.clearGraph();
    this.linkAmount++;
    this.prepareGraph();
    console.log(this.links.length);
  }


  generateGraph() {
    this.graphModel.emit(this.graph);
    console.log(this.inputText[1]);
  }

  private prepareGraph() {
    this.clearGraph();
    for (let i = 0; i < this.nodeAmount; i++) {
      this.nodes.push(new Vertex(i + 1, 'test'));
    }
    for (let j = 0; j < this.linkAmount; j++) {
      this.links.push(new Link(1, 0, 0));
    }
    this.graph.nodes = this.nodes;
    this.graph.links = this.links;
    this.graphModel.emit(this.graph);
  }

  private clearGraph() {
    this.nodes = [];
    this.links = [];
  }

  ngOnChanges(): void {
    console.log(this.inputText);

  }

}
