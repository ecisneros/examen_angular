import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from "@angular/http";
import { Http, RequestOptions } from '@angular/http';
import {Router} from "@angular/router";

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import {environment} from "../environments/environment";

// Core providers
import {CoreModule} from "./core/core.module";
import {SmartadminLayoutModule} from "./shared/layout/layout.module";
import {LoginComponent} from "./+auth/+login/login.component";
import {AuthGuard} from "./+auth/+guards/auth.guards";
import {AuthenticationService} from "./+auth/+services/authentication.service";
import {BackendService} from "./+rest/backend.service";
import {UserService} from "./+auth/+services/user.service";
import {StorageService} from "./+common/storageLocalValues/storage.service";
import {EmpleadoService} from "./+common/service/empleado.service";
import {ModuloService} from "./shared/layout/navigation/http-modulo-service";
import { AuthHttp, AuthConfig } from 'angular2-jwt';
//import {provideBackendService} from "./+rest/backend.serviceProvider";
import {NoAutorizadoComponent} from "./+auth/+noautorizado/noautorizado.component";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

export function provideBackendService(http: Http, authHttp: AuthHttp, router: Router) {
    let localhost:  String = environment.backend;
    let port: String = environment.port;
    let url = "http://" + localhost + ":" + port;
    return new BackendService(url, http , authHttp, router);
}


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoginComponent,
    NoAutorizadoComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CoreModule,
    SmartadminLayoutModule,
    routing
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    AuthGuard,
    AuthenticationService,
    UserService,
    EmpleadoService,
    StorageService,
    ModuloService,
    APP_PROVIDERS,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {
      provide: BackendService,
      useFactory: provideBackendService,
      deps: [Http, AuthHttp, Router]
    }
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}


}
