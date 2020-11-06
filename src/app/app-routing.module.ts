import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatCreateComponent} from './cats/cat-create/cat-create.component';
import {CatDetailComponent} from './cats/cat-detail/cat-detail.component';
import {CatListComponent} from './cats/cat-list/cat-list.component';

const routes: Routes = [
  {path: 'cats', component: CatListComponent},
  {path: 'cats/:id', component: CatDetailComponent},
  {path: 'cat-create', component: CatCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
