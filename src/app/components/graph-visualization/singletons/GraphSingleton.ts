import {Link, Node} from '../d3/models';

export class GraphSingleton {

  private static _instance: GraphSingleton = new GraphSingleton();
  public nodes: Node[] = [];
  public links: Link[] = [];


  public AddData(nodes: Node[], links: Link[]) {
    this.nodes = nodes;
    this.links = links;
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
