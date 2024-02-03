import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OpenBankingComponent } from './modules/open-banking/open-banking.component';
import { DataAnalysisComponent } from './modules/data-analysis/data-analysis.component';
import { AssistancePaymentComponent } from './modules/assistance-payment/assistance-payment.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
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
    path: 'assistance-payment',
    component: AssistancePaymentComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found' },
];
