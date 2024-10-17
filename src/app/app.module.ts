import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ComponentTableComponent } from './shared/component.table/component.table.component';
import { ProductCrudComponent } from './products/components/product-crud/product-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    ComponentTableComponent,
    ProductCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
