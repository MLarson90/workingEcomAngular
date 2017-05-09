import { Injectable } from '@angular/core';
import { Product } from 'app/product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductServiceService {
  products: FirebaseListObservable<any[]>;
    constructor(private database: AngularFireDatabase) {
      this.products = database.list('products');
    }
    getProduct(){
      return this.products;
    }
    addProduct(newproduct: Product){
      this.products.push(newproduct);
    }
    getProductById(productId: string){
      return this.database.object('products/' + productId);
    }
    updateProduct(updatedProduct){
      var productEntry = this.getProductById(updatedProduct.$key);
      productEntry.update({name: updatedProduct.name,
                           brand: updatedProduct.brand,
                           price: updatedProduct.price})
    }
    deleteProduct(productToDelete){
      var productEntry = this.getProductById(productToDelete.$key);
      productEntry.remove();
    }
}
