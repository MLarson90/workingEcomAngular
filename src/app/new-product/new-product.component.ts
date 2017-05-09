import { Component } from '@angular/core';
import { Product } from 'app/product.model';
import { ProductServiceService } from 'app/product-service.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [ProductServiceService]
})
export class NewProductComponent {
  constructor(private productService: ProductServiceService){}
    submitForm(name:string, brand:string, price:number){
      var newProduct: Product = new Product(name,brand,price);
      this.productService.addProduct(newProduct);
    }


}
