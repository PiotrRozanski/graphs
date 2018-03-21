export class ElementOfTable {
  public elementValue: number;
  public vertex: number;
  public edge: number;

  constructor(value, vertex, edge) {
    this.elementValue = value;
    this.vertex = vertex;
    this.edge = edge;
  }
}
