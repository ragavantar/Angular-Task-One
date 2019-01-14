import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdFormComponent } from './prod-form/prod-form.component'; 
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path : "" ,component : ProdFormComponent},
{ path : "form/:id" ,component : ProdFormComponent},
{ path : "products" , component : ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
