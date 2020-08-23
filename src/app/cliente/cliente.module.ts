import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


@NgModule({
  declarations: [
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  exports: [
    ClienteFormComponent
  ]
})
export class ClienteModule { }
