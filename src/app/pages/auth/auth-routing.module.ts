import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[

      {
        path: 'cadastro',
        loadChildren: () => import('./cadastro/cadastro.module').then((module) => module.CadastroModule)
      },
      {
        path: 'forgot',
        loadChildren: () => import('./forgot/forgot.module').then((module) => module.ForgotModule)
      },
      {
        path: 'login-page',
        loadChildren: () => import('./login-page/login-page.module').then((module) => module.LoginPageModule)
      },
      {
        redirectTo: 'login-page',
        path: '**'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
