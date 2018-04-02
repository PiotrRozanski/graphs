export class Link {
  readonly weight: number;
  readonly source: number;
  readonly target: number;

  constructor(weight: number, source: number, target: number) {
    this.weight = this.validateWeight(weight);
    this.source = source;
    this.target = target;
  }

  private validateWeight(weight: number): number {
    if (weight > 0) {
      return weight;
    } else {
      throw new Error('Error: incorrect weight');
    }
  }
}
