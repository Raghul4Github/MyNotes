 import { ApplicationConfig, importProvidersFrom } from '@angular/core';
 import { provideRouter } from '@angular/router';

 import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { bookService } from './service/bookService';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),bookService,importProvidersFrom(HttpClientModule)]
};


