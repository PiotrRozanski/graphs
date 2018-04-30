import {Link, Node} from '../d3/models';
import {t} from '@angular/core/src/render3';
import {log} from 'util';

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

  public getAdjacencyNodes(node: Node): Node[] {
    const adjacencyLinks: Link[] = [];
    this.links.forEach((link) => {
      if ((<Node>(link.source)).id === node.id || (<Node>(link.target)).id === node.id) {
        adjacencyLinks.push(link);
      }
    });
    const adjacencyNodes: Node[] = [];
    adjacencyLinks.forEach(
      (link) => {
      if ((<Node>(link.source)).id !== node.id) {
        const source = Number((<Node>(link.source)).id);
        adjacencyNodes.push(this.findNodeBy(source));
      } else {
        const target = Number((<Node>(link.target)).id);
        adjacencyNodes.push(this.findNodeBy(target));
      }
    });
    return adjacencyNodes;
  }

  public findNodeBy(num: Number): Node {
    let node: Node;
    this.nodes.forEach((item) => {
      if (Number(item.id) === num) {
        node = item;
      }
    });
    return node;
  }
}
