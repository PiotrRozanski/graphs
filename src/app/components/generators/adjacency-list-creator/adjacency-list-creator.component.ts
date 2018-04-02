import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Vertex} from '../../graph_model/Vertex';
import {Edge} from '../../graph_model/Edge';
import {ElementOfTable} from '../../graph_model/ElementOfTable';

@Component({
  selector: 'app-adjacency-list-creator',
  templateUrl: './adjacency-list-creator.component.html',
  styleUrls: ['./adjacency-list-creator.component.css']
})
// Todo zmienic nazwe na generator
export class AdjacencyListCreatorComponent implements OnInit, OnChanges {
  @Output() listElements: EventEmitter<ElementOfTable[]> = new EventEmitter();
  listOfElements: ElementOfTable[] = [];
  inputText: string[] = [];

  elements: ElementOfTable[] = [];
  listIndex = 2;

  constructor() {
  }

  ngOnInit() {
    this.preparelist();
  }

  increaseList() {
    this.clearGraph();
    this.listIndex++;
    this.preparelist();
  }

  decreaseList() {
    if (this.listIndex > 1) {
      this.clearGraph();
      this.listIndex--;
      this.preparelist();
    }
  }

   generateGraph() {
    this.listOfElements = [];
    for (let i = 0; i < this.listIndex; i++) {
      let numbers: string[] = [];
      numbers = this.inputText[i].split('->');
      for (let j = 0; j < numbers.length; j++) {
        const vertex: Vertex = new Vertex(i + 1, (i + 1).toString());
        const edge: Edge = new Edge(+numbers[j], 1);
        this.listOfElements.push(new ElementOfTable(1, vertex, edge));
      }
    }
    this.listElements.emit(this.listOfElements);
  }

  // ToDo poprawić (nie ma tworzyć obiektów ElementOfTable)
  private preparelist() {
    this.clearGraph();
    for (let i = 0; i < this.listIndex; i++) {
      this.elements[i] = new ElementOfTable(0, new Vertex(i + 1, (i + 1).toString()), new Edge(i + 1, 1));
    }
  }

  private clearGraph() {
    this.elements = [];
  }

  ngOnChanges(): void {
  }

}
