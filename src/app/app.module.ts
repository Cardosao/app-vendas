import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './sample/form/form.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './page/home/home.component';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteService } from './service/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClienteModule
  ],
  providers: [
    ClienteService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
