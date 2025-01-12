import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notRetainAuthGuardGuard } from './Helpers/guards/not-retain-auth-guard.guard';
import { authGuard } from './Helpers/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule),
     canActivate: [notRetainAuthGuardGuard]
  },
  {
    path: '', loadChildren: () => import('./Core/core.module').then(m => m.CoreModule),
    canActivate: [authGuard]
  },

  {
    path: "**", redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
