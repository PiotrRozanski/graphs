import {Routes, RouterModule} from '@angular/router';
import {AdjacencyMatrixPageComponent} from './pages/adjacency-matrix-page/adjacency-matrix-page.component';
import {IncidenceMatrixPageComponent} from './pages/incidence-matrix-page/incidence-matrix-page.component';
import {AdjacencyListPageComponent} from './pages/adjacency-list-page/adjacency-list-page.component';
import {GraphConverterPageComponent} from './pages/graph-converter-page/graph-converter-page.component';
import {InputFormPageComponent} from './pages/input-form-page/input-form-page.component';

const routes: Routes = [
  {path: 'app-input-form-page', component: InputFormPageComponent},
  {path: 'app-adjacency-matrix-page', component: AdjacencyMatrixPageComponent},
  {path: 'app-incidence-matrix-page', component: IncidenceMatrixPageComponent},
  {path: 'app-adjacency-list-page', component: AdjacencyListPageComponent},
  {path: 'app-graph-converter-page', component: GraphConverterPageComponent},
];

export const Routing = RouterModule.forRoot(routes);
