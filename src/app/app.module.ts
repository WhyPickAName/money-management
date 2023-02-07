import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyCe923fgsyjFlPTMX0KMpK_C2sr-LFZ3CI",
    authDomain: "money-management-46182.firebaseapp.com",
    databaseURL: "https://money-management-46182-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "money-management-46182",
    storageBucket: "money-management-46182.appspot.com",
    messagingSenderId: "1089672651361",
    appId: "1:1089672651361:web:6d96e7133653bc154f4020",
    measurementId: "G-WV0WHYX3M7"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

