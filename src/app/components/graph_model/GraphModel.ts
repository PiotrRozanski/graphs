import {Link} from './Link';
import {Node} from './Node';

export class GraphModel {
  public nodes: Node[] = [];
  public links: Link[] = [];

  constructor() {

  }

  public addLink(source: number, target: number) {
    for (let i = 0; i < this.links.length; i++) {
      if (this.links[i].source === source && this.links[i].target === target) {
        return;
      }
    }
    console.log( source + '/' + target);
    this.links.push(new Link(1, source, target));
  }

  public removeLink(source: number, target: number) {
    for (let i = 0; i < this.links.length; i++) {
      if (this.links[i].source === source && this.links[i].target === target) {
        this.links.splice(i, 1);
        console.log( source + '/' + target);
      }
    }
    return;
  }

  public addVertices(vertexCount: number) {
    this.nodes = [];
    for (let i = 0; i < vertexCount; i++) {
      this.nodes.push(new Node(i, i.toString()));
    }
  }
}
