import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatCreateComponent} from './cats/cat-create/cat-create.component';
import {CatDetailComponent} from './cats/cat-detail/cat-detail.component';
import {CatListComponent} from './cats/cat-list/cat-list.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {CommonModule} from '@angular/common';

let routes: Routes;
routes = [
  {path: 'login', component: LoginComponent },
  {path: 'cat-list', component: CatListComponent},
  {path: 'cats/:id', component: CatDetailComponent},
  {path: 'cat-create', component: CatCreateComponent},
  {path: 'cat-detail', component: CatDetailComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
