import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CatListComponent } from './cats/cat-list/cat-list.component';
import { CatDetailComponent } from './cats/cat-detail/cat-detail.component';
import { CatCreateComponent } from './cats/cat-create/cat-create.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthenticationService} from './shared/service/authentication.service'; // <--NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatDetailComponent,
    CatCreateComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    // TodoitemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
