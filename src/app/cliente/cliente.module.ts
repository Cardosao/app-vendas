import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import {CustomPaginationComponent} from '../pagination/custom-pagination/custom-pagination.component';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListComponent,
    CustomPaginationComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
  ],
  exports: [
    ClienteFormComponent,
    ClienteListComponent,
  ]
})
export class ClienteModule { }
