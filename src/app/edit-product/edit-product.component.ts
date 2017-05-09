import { Component,Input, OnInit } from '@angular/core';
import { ProductServiceService } from 'app/product-service.service';
import { Product } from 'app/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers:[ProductServiceService]
})
export class EditProductComponent implements OnInit {
  @Input() selectedProduct;
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
  }
  beginUpdatingProduct(productToUpdate){
    this.productService.updateProduct(productToUpdate);
  }
  beginDeletingProduct(productToDelete){
    if(confirm("Are you sure you want to delete this product?")){
      this.productService.deleteProduct(productToDelete);
    }
  }
}
