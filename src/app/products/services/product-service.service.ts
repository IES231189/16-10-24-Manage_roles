import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private storageKey = 'products';

  constructor() { }

  getProducts(): Product[]{
      const products = localStorage.getItem(this.storageKey);
      return products ? JSON.parse(products): [];
  }

  createProducts(product : Product):void{
     const products = this.getProducts();
     product.id = products.length ? Math.max(...products.map(p=>p.id))+1:1;
     products.push(product);
     localStorage.setItem(this.storageKey , JSON.stringify(products))
  }

  updateList(updateProduct : Product):void{
    let products = this.getProducts();
    const index = products.findIndex(p => p.id === updateProduct.id);

    if(index !== -1){
      products[index] = updateProduct;
      localStorage.setItem(this.storageKey , JSON.stringify(products))
    }
  }


  deleteProduct(productID : number):void{
    let products = this.getProducts();
    products = products.filter(p => p.id !== productID);
    localStorage.setItem(this.storageKey , JSON.stringify(products))

  }


}
