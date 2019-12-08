import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { MainFunctionModule } from './main-function/main-function.module';
import { NewProjectModule } from './new-project/new-project.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MainFunctionModule,
    NewProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
