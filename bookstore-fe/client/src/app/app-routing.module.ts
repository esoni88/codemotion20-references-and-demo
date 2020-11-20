import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: BooksComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
