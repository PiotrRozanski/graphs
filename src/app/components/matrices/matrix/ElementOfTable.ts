export class ElementOfTable {
  public elementValue: number;
  public columnID: number;
  public rowID: number;

  constructor(value, firstDimensional, twiceDimensional) {
    this.elementValue = value;
    this.columnID = firstDimensional;
    this.rowID = twiceDimensional;
  }
}
