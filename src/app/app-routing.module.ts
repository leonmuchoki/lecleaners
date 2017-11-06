import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {SuccessCardsComponent} from './success-cards.component';
import {SuccessCardOrderComponent} from './success-card-order.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'successcards', component: SuccessCardsComponent },
  { path: 'ordersuccesscard/:id', component: SuccessCardOrderComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
