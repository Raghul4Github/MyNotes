import { HttpClientModule } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { bookService } from "./app/service/bookService";
import { AppComponent } from "./app/app.component";
import { books } from "./assets/books";
import { appConfig } from "./app/app.config";




//  bootstrapApplication(AppComponent,    {
//    providers: [bookService,importProvidersFrom(HttpClientModule),],
//  }).catch((err) => console.error(err));
bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));
  providers:[bookService,importProvidersFrom(HttpClientModule)]

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
