import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Product } from 'app/product.model';
import { ProductServiceService } from 'app/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductServiceService,AngularFireDatabase]
})
export class AppComponent implements OnInit{
    title = 'Time Store';
    products: FirebaseListObservable<any[]>;
    constructor(private productService: ProductServiceService) {}
    ngOnInit(){
      this.products = this.productService.getProduct();
    }


}
