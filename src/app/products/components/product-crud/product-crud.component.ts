import { Component , OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {
  products : Product[] = [];

  column = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nombre' },
    { field: 'price', header: 'Precio' },
    { field: 'description', header: 'description' },
    { field: 'quantify', header: 'Cantidad' }
  ];

  constructor(private productService:ProductServiceService){}

  ngOnInit():void{
    this.products = this.productService.getProducts();
    console.log("ngOnInit se ha llamado");
    console.log(this.column) ;
    console.log(this.products);
  }


}
