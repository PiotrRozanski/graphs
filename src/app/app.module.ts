import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MdlModule} from '@angular-mdl/core';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { MatrixComponent } from './components/matrices/matrix/matrix.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    NgxGraphModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
