import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path:'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then((module) =>module.LoginPageModule) //**?? */
  },
  {
    path:'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((module) =>module.AdminModule) //**?? */
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
