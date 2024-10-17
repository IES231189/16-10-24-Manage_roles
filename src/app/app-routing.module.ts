import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { ComponentTableComponent } from './shared/components/component.table/component.table.component';

const routes: Routes = [
  {path:'' , pathMatch:'full', component:LoginComponent},
  {path:'Dashboard' , component: ComponentTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
