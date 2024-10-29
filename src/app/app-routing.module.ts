import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { ComponentTableComponent } from './shared/components/table-component/component.table/component.table.component';
import { ProductCrudComponent } from './products/components/product-crud/product-crud.component';

const routes: Routes = [
  {path:'' , pathMatch:'full', component:LoginComponent},
  {path:'product-crud' , component: ProductCrudComponent},
  {path:'dashboard' , component:ProductCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
