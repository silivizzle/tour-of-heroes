// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

// Regular bootstrapping procedures after this comment
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routes';
import { HTTP_PROVIDERS }       from '@angular/http';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS
]);
