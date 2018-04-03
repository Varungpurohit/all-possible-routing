import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from '../app/first/first.component';
import {SecondComponent} from '../app/second/second.component';
import {ThirdComponent} from '../app/third/third.component';
const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
{path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
{path: 'third', component: ThirdComponent}
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
