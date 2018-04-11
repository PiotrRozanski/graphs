import {Vertex} from './Vertex';
import {Edge} from './Edge';

export class ElementOfTable {
  public value: number;
  public vertex: Vertex;
  public edge: Edge;

  constructor(value: number, vertex: Vertex, edge: Edge) {
    this.value = value;
    this.vertex = vertex;
    this.edge = edge;
  }
}
