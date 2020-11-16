import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatCreateComponent} from './cats/cat-create/cat-create.component';
import {CatDetailComponent} from './cats/cat-detail/cat-detail.component';
import {CatListComponent} from './cats/cat-list/cat-list.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './products/product-list/product.component';
import {CatUpdateComponent} from './cats/cat-update/cat-update.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AdminComponent} from './admin/admin.component';
import {Role} from './shared/models/role';

let routes: Routes;
routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] /*, data: { roles: [Role.Admin]}*/},
  {path: 'login', component: LoginComponent },
  {path: 'cat-list', component: CatListComponent, canActivate: [AuthGuard]},
  {path: 'cats/:id', component: CatDetailComponent},
  {path: 'cat-create', component: CatCreateComponent},
  {path: 'cat-detail', component: CatDetailComponent},
  {path: 'cat-update', component: CatUpdateComponent},
  {path: 'product-list', component: ProductComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
