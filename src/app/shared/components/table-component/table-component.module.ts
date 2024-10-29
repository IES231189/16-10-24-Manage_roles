import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTableComponent } from './component.table/component.table.component';
import { EditButtonComponent } from './edit.button/edit.button.component';
import { DeleteButtonComponent } from './delete.button/delete.button.component';

@NgModule({
  declarations: [
    ComponentTableComponent,
    EditButtonComponent,
    DeleteButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentTableComponent
  ]
})
export class TableComponentModule { }
