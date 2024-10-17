import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditButtonComponent } from './components/edit.button/edit.button.component';
import { DeleteButtonComponent } from './components/delete.button/delete.button.component';



@NgModule({
  declarations: [
    EditButtonComponent,
    DeleteButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
