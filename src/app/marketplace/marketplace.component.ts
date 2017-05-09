import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product.model';
import { ProductServiceService } from '../product-service.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ProductServiceService]
})
export class MarketplaceComponent implements OnInit {
    products: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;
    constructor(private router: Router, private productServiceService: ProductServiceService) {
      this.products = productServiceService.products;
    }
  ngOnInit() {
    this.products = this.productServiceService.getProduct();
  }
  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
  }
}
