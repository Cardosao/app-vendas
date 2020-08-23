import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './sample/form/form.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './page/home/home.component';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
