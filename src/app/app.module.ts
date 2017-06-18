import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCbpfvIZP4ub4Ua7ceZGhYVlNwSr6UpdFI",
  authDomain: "hiqparkingv3.firebaseapp.com",
  databaseURL: "https://hiqparkingv3.firebaseio.com",
  projectId: "hiqparkingv3",
  storageBucket: "hiqparkingv3.appspot.com",
  messagingSenderId: "877601951339"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
