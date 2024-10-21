import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditButtonComponent } from './components/edit.button/edit.button.component';
import { DeleteButtonComponent } from './components/delete.button/delete.button.component';
import { ComponentTableComponent } from './components/component.table/component.table.component';



@NgModule({
  declarations: [
    ComponentTableComponent,
    EditButtonComponent,
    DeleteButtonComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[
    ComponentTableComponent,
    EditButtonComponent,
    DeleteButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
