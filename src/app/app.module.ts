import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './core/material.module';
import { ErrorStateMatcher,ShowOnDirtyErrorStateMatcher } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';
import { AppRoutingModule } from './core/app-routing.module';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FormComponent } from './component/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ErrorComponent],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
