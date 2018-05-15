import APP_CONFIG from '../../../../app.config';
import {Color} from '../../../../features/algorithms/coloring-algorithm/Color';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  linkCount: number = 0;
  color = new Color(0, 94, 176);

  constructor(id) {
    this.id = id;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get r() {
    return 40;
  }

  get fontSize() {
    return 40;
  }

}
