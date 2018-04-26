import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
          {
             path: '',
             component: HomeComponent
          }
         ,{
            path: 'docs',
            component: DocsComponent
         },
         {
            path: 'project',
            component: ProjectComponent
         }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
