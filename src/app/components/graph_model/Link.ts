export class Link {
  private id: number;
  private weight: number;
  private source: number;
  private target: number;

  constructor(id: number, weight: number, source: number, target: number) {
    this.id = id;
    this.weight = weight;
    this.source = source;
    this.target = target;
  }
}
