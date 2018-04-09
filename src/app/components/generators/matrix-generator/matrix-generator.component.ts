import {Component, Input, OnInit} from '@angular/core';
import {Link, Node} from '../../graph-visualization/d3/models';

@Component({
  selector: 'app-matrix-generator',
  templateUrl: './matrix-generator.component.html',
  styleUrls: ['./matrix-generator.component.css']
})
export class MatrixGeneratorComponent implements OnInit {
  @Input() nodes: Node[] = [];
  @Input() links: Link[] = [];
  private matrix: number[][] = [[]];
  private list: Link[] = [];
  private listText: string[] = [];
  private type = '';

  constructor() {
  }

  ngOnInit() {
    this.prepareEmptyAdjacencyMatrix();
    this.prepareEmptyList();
  }


  private prepareEmptyAdjacencyMatrix() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.nodes.length; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  private prepareEmptyIncidenceMatrix() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.links.length; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  private prepareEmptyList() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.listText[i] = ' ';
    }
  }

  private createAdjacencyMatrix() {
    this.prepareEmptyAdjacencyMatrix();
    let source;
    let target;
    this.links.forEach((element) => {
      source = element.source.valueOf();
      target = element.target.valueOf();
      this.matrix[source.id - 1][target.id - 1] = 1;
      this.matrix[target.id - 1][source.id - 1] = 1;
      this.type = 'adjacency_matrix';
    });
  }

  private createIncidenceMatrix() {
    this.prepareEmptyIncidenceMatrix();
    let source;
    let target;
    console.log(this.links.length);
    this.links.forEach((element, index) => {
      source = element.source.valueOf();
      target = element.target.valueOf();
      this.matrix[source.id - 1][index] = 1;
      this.matrix[target.id - 1][index] = 1;
      this.type = 'incidence_matrix';
    });
  }

  private createAdjacencylist() {
    this.list = [];
    let source;
    let target;
    this.links.forEach((element) => {
      source = element.source.valueOf();
      target = element.target.valueOf();
      this.list.push(new Link(source, target));
      this.list.push(new Link(target, source));
      this.type = 'adjacency_list';
    });
    this.prepareDataList();
  }

  private prepareDataList() {
    let linkID;
    let edgeId;
    for (let n = 0; n < this.nodes.length; n++) {
      for (let j = 0; j < this.list.length; j++) {
          linkID = this.list[j].source;
          edgeId = this.list[j].target;
          if (linkID.id === (n + 1)) {
            this.listText[n] += '->' + edgeId.id;
          }
        }
        this.listText[n] = this.listText[n].replace('undefined', '');
      }
    }
}
