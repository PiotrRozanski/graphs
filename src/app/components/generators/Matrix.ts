import {GraphModel} from '../graph_model/GraphModel';

export class Matrix {
  public graph: GraphModel = new GraphModel();

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

}
