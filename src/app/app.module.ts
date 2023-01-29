import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


// const config = {
//   apiKey: "AIzaSyAVOOb6qjdQM0BUd3zAAcSKRkiWyjje7W0",
//   authDomain: "money-manager-a7894.firebaseapp.com",
//   projectId: "money-manager-a7894",
//   storageBucket: "money-manager-a7894.appspot.com",
//   messagingSenderId: "423284694397",
//   appId: "1:423284694397:web:803adfead337d33c5c4014",
//   measurementId: "G-WYZXR401Y4"
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    // AngularFireModule.initializeApp(config),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
