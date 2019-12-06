import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatConnexionComponent } from './chat-connexion/chat-connexion.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { SalonComponent } from './salon/salon.component';
import { HttpClientModule } from '@angular/common/http';
import { SalonListComponent } from './salon-list/salon-list.component';

const appRoutes: Routes =  [
  { path: '', component: ChatConnexionComponent },
  { path: 'salon', component: SalonListComponent },
  { path: '**', component: ChatConnexionComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ChatConnexionComponent,
    SalonComponent,
    SalonListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
