import {Routes, RouterModule} from '@angular/router';
import {AdjacencyMatrixPageComponent} from './pages/adjacency-matrix-page/adjacency-matrix-page.component';
import {IncidenceMatrixPageComponent} from './pages/incidence-matrix-page/incidence-matrix-page.component';
import {AdjacencyListPageComponent} from './pages/adjacency-list-page/adjacency-list-page.component';

const routes: Routes = [
  {path: 'app-adjacency-matrix-page', component: AdjacencyMatrixPageComponent},
  {path: 'app-incidence-matrix-page', component: IncidenceMatrixPageComponent},
  {path: 'app-adjacency-list-page', component: AdjacencyListPageComponent},
];

export const Routing = RouterModule.forRoot(routes);
