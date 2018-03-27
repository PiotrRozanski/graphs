import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, DoCheck,
  Input, OnDestroy,
  OnInit
} from '@angular/core';
import {ForceDirectedGraph} from './d3/models';
import {D3Service} from './d3';
import {GraphComponent} from '@swimlane/ngx-graph/release/graph/graph.component';
import {GraphSingleton} from './singletons/GraphSingleton';

@Component({
  selector: 'app-graph-visualization',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph-visualization.component.html',
  styleUrls: ['./graph-visualization.component.css']
})
export class GraphVisualizationComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('nodes') nodes;
  @Input('links') links;
  graph: ForceDirectedGraph;
  private _options: { width, height } = {width: 400, height: 300};

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.graph.initSimulation(this.options);
    console.log('finish');
  }

  get options() {
    return this._options = {
      width: 550,
      height: 500
    };
  }

  ngOnDestroy() {
    GraphSingleton.Instance.AddData(this.nodes, this.links);
  }

}
