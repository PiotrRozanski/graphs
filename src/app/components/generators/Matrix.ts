import {GraphModel} from '../graph_model/GraphModel';

export class Matrix {
  public graph: GraphModel = new GraphModel();
  matrix: number[][] = [[]];

  constructor() {
  }

  protected addLink(firstVertex: number, secondVertex: number) {
    this.graph.addLink(firstVertex, secondVertex);
  }

  protected removeLink(firstVertex: number, secondVertex: number) {
    this.graph.removeLink(firstVertex, secondVertex);
  }

  protected addVertices(vertexCount: number) {
    this.graph.addVertices(vertexCount);
  }

  protected clearGraph() {
    this.graph = new GraphModel();
  }

  protected setLinksForMatrix(): void {
    for (let i = 0; i < this.graph.links.length; i++) {
      const source = this.graph.links[i].source;
      const target = this.graph.links[i].target;
      this.setMatrix(1, source, target);
    }
  }

  protected setMatrix(value: number, firstVertex: number, secondVertex: number) {
    this.matrix[firstVertex][secondVertex] = value;
  }
}
