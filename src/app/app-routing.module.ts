import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AppAccountsModule),
  },
  {
    path: 'txs',
    loadChildren: () => import('./txs/txs.module').then((m) => m.AppTxsModule),
  },
  {
    path: 'validators',
    loadChildren: () =>
      import('./cosmos/staking/validators/validators.module').then(
        (m) => m.AppValidatorsModule,
      ),
  },
  {
    path: 'keys',
    loadChildren: () =>
      import('./keys/keys.module').then((m) => m.AppKeysModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
