import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { DashboardComponent } from './dashboard.component';
import { SuccessCardsComponent } from './success-cards.component';
import { SuccessCardOrderComponent } from './success-card-order.component';
import { ContactComponent } from './contact.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    SuccessCardsComponent,
    SuccessCardOrderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule // imports firebase/firestore, only needed for database features
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
