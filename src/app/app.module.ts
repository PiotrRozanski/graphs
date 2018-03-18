import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MdlModule} from '@angular-mdl/core';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { MatrixComponent } from './components/matrices/matrix/matrix.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MatrixComponent,
    GraphVisualizationComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    AdjacencyMatrixPageComponent,
    AdjacencyMatrixComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    NgxGraphModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
