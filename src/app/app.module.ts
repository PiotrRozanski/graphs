import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MdlModule} from '@angular-mdl/core';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { AdjacencyMatrixCreatorComponent } from './components/generators/adjacency-matrix-creator/adjacency-matrix-creator.component';
import {
  ErrorStateMatcher,
  MatButtonModule, MatDividerModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GraphVisualizationComponent } from './components/graph-visualization/graph-visualization.component';
import { LinkVisualComponent } from './components/graph-visualization';
import { NodeVisualComponent } from './components/graph-visualization';
import {ZoomableDirective} from './components/graph-visualization/d3/directives';
import {DraggableDirective} from './components/graph-visualization/d3/directives';
import {D3Service} from './components/graph-visualization/d3';
import {AdjacencyMatrixPageComponent} from './pages/adjacency-matrix-page/adjacency-matrix-page.component';
import { AdjacencyMatrixComponent } from './features/adjacency-matrix/adjacency-matrix.component';
import { IncidenceMatrixPageComponent } from './pages/incidence-matrix-page/incidence-matrix-page.component';
import { IncidenceMatrixComponent } from './features/incidence-matrix/incidence-matrix.component';
import {Routing} from './app.routing';
import { IncidenceMatrixCreatorComponent } from './components/generators/incidence-matrix-creator/incidence-matrix-creator.component';
import { AdjacencyListPageComponent } from './pages/adjacency-list-page/adjacency-list-page.component';
import { AdjacencyListCreatorComponent } from './components/generators/adjacency-list-creator/adjacency-list-creator.component';
import { AdjacencyListComponent } from './features/adjacency-list/adjacency-list.component';
import {FormsModule} from '@angular/forms';
import { GraphConverterPageComponent } from './pages/graph-converter-page/graph-converter-page.component';
import { MatrixGeneratorComponent } from './components/generators/matrix-generator/matrix-generator.component';
import { InputFormPageComponent } from './pages/input-form-page/input-form-page.component';
import { InputFormComponent } from './features/input-form/input-form.component';
import { InputFormCreatorComponent } from './components/generators/input-form-creator/input-form-creator.component';
import {HamiltonComponent} from './features/algorithms/hamilton/hamilton.component';
import { DfsComponent } from './features/algorithms/dfs/dfs.component';
import { EulerianComponent } from './features/algorithms/eulerian/eulerian.component';
import { CriticalLinksComponent } from './features/algorithms/critical-links/critical-links.component';
import { ColoringAlgorithmComponent } from './features/algorithms/coloring-algorithm/coloring-algorithm.component';
import { ShortestPathComponent } from './features/algorithms/shortest-path/shortest-path.component';
import { CorrectShortestPathComponent } from './features/algorithms/correct-shortest-path/correct-shortest-path.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdjacencyMatrixCreatorComponent,
    GraphVisualizationComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    AdjacencyMatrixPageComponent,
    AdjacencyMatrixComponent,
    IncidenceMatrixPageComponent,
    IncidenceMatrixComponent,
    IncidenceMatrixCreatorComponent,
    AdjacencyListPageComponent,
    AdjacencyListCreatorComponent,
    AdjacencyListComponent,
    GraphConverterPageComponent,
    MatrixGeneratorComponent,
    InputFormPageComponent,
    InputFormComponent,
    InputFormCreatorComponent,
    HamiltonComponent,
    DfsComponent,
    EulerianComponent,
    CriticalLinksComponent,
    ColoringAlgorithmComponent,
    ShortestPathComponent,
    CorrectShortestPathComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    NgxGraphModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    Routing,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatDividerModule
  ],
  providers: [D3Service, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
