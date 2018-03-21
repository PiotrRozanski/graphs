import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MdlModule} from '@angular-mdl/core';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { AdjacencyMatrixCreatorComponent } from './components/matrices/adjacency-matrix-creator/adjacency-matrix-creator.component';
import {MatButtonModule, MatMenuModule, MatSnackBarModule} from '@angular/material';
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
import { IncidenceMatrixCreatorComponent } from './components/matrices/incidence-matrix-creator/incidence-matrix-creator.component';


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
    IncidenceMatrixCreatorComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    NgxGraphModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    Routing
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
