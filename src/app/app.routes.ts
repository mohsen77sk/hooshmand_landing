import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OpenBankingComponent } from './modules/open-banking/open-banking.component';
import { DataAnalysisComponent } from './modules/data-analysis/data-analysis.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'open-banking',
    component: OpenBankingComponent,
  },
  {
    path: 'data-analysis',
    component: DataAnalysisComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found' },
];
