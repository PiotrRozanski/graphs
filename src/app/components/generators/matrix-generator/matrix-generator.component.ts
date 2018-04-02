import {Component, Input, OnInit} from '@angular/core';
import {ElementOfTable} from '../../graph_model/ElementOfTable';
import {Vertex} from '../../graph_model/Vertex';
import {Edge} from '../../graph_model/Edge';
import {Link, Node} from '../../graph-visualization/d3/models';

@Component({
  selector: 'app-matrix-generator',
  templateUrl: './matrix-generator.component.html',
  styleUrls: ['./matrix-generator.component.css']
})
export class MatrixGeneratorComponent implements OnInit {
  @Input() nodes: Node[] = [];
  @Input() links: Link[] = [];
  private matrix: ElementOfTable[][] = [[]];
  private list: ElementOfTable[][] = [[]];
  private listText: string[] = [];
  private type = '';
  private test: any;

  constructor() {
  }

  ngOnInit() {
    this.prepareEmptyMatrix();
    this.prepareEmptyList();
  }


  private prepareEmptyMatrix() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.nodes.length; j++) {
        this.matrix[i][j] = new ElementOfTable(0, new Vertex(i + 1, (i + 1).toString()), new Edge(i + 1, 1));
      }
    }
  }

  private prepareEmptyList() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.list[i] = [];
      for (let j = 0; j < this.links.length; j++) {
        if (this.links[j].source === i) {
          this.list[i][j] = new ElementOfTable(0, new Vertex(i + 1, (i + 1).toString()), new Edge(i + 1, 1));
        }
      }
    }
  }

  private createAdjacencyMatrix() {
    this.prepareEmptyMatrix();
    let source;
    let target;
    this.links.forEach((element) => {
      source = element.source.valueOf();
      target = element.target.valueOf();
      const vertex = new Vertex(source.id, source.id.toString());
      const edge = new Edge(target.id, 1);
      this.matrix[source.id - 1][target.id - 1] = new ElementOfTable(1, vertex, edge);
      this.matrix[target.id - 1][source.id - 1] = new ElementOfTable(1, vertex, edge);
      this.type = 'adjacency_matrix';
    });
  }

  private createIncidenceMatrix() {
    this.prepareEmptyMatrix();
    let source;
    let target;
    this.links.forEach((element) => {
      source = element.source.valueOf();
      target = element.target.valueOf();
      const vertex = new Vertex(source.id, source.id.toString());
      const edge = new Edge(target.id, 1);
      this.matrix[source.id - 1][target.id - 1] = new ElementOfTable(1, vertex, edge);
      this.type = 'adjacency_matrix';
    });
  }

  private createAdjacencylist() {
    this.prepareEmptyList();
    let source;
    let target;
    this.links.forEach((element) => {
      source = element.source.valueOf();
      target = element.target.valueOf();
      const vertex = new Vertex(source.id, source.id.toString());
      const edge = new Edge(target.id, 1);
      this.list[target.id - 1][source.id - 1] = new ElementOfTable(1, vertex, edge);

      this.type = 'adjacency_list';
    });
    this.prepareDataList();
  }

  private prepareDataList() {
    let linkID;
    let edgeId;
    for (let j = 0; j < this.nodes.length; j++) {
      for (let i = 0; i < this.links.length; i++) {
        linkID = this.links[i].source.valueOf();
        edgeId = this.links[i].target.valueOf();
        if (linkID.id === j + 1) {
          this.listText[j] += '->' + edgeId.id;
        }
      }
      this.listText[j] = this.listText[j].replace('undefined', '');
    }
  }

  // private prepareDataList() {
  //   for (let i = 0; i < this.nodes.length; i++) {
  //     for (let j = 0; j < this.list[j].length; j++) {
  //       if (this.list[i][j + 1].value === 1) {
  //         this.listText[i] += '->' + this.list[i][j].edge;
  //       }
  //     }
  //   }
  // }
}
