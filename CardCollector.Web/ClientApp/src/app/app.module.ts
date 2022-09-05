import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardSetComponent } from './card-set/card-set.component';
import { SearchCardComponent } from './search-card/search-card.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SizeDetectorComponent } from './size-detector/size-detector.component';
import { SearchCardModalComponent } from './search-card/search-card-modal/search-card-modal.component';
import { SetListComponent } from './set-list/set-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CreateCardComponent,
    CardSetComponent,
    SearchCardComponent,
    SizeDetectorComponent,
    SearchCardModalComponent,
    SetListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AppRoutingModule,
    ApiAuthorizationModule,
    CoreModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
