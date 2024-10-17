import { NgModule } from '@angular/core';
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
  ]
  ,exports:[
    ComponentTableComponent,

  ]
})
export class SharedModule { }
