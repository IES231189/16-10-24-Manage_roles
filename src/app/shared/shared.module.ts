import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponentModule } from './components/table-component/table-component.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TableComponentModule

  ],
  exports:[
    TableComponentModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
