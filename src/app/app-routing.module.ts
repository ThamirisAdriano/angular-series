import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login-page',
    loadChildren: () => import('./pages/auth/login-page/login-page.module').then((module) =>module.LoginPageModule) //**?? */
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
