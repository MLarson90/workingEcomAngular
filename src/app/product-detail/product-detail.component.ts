import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'app/product-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'app/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductServiceService]

})
export class ProductDetailComponent implements OnInit {
  productId: string;
  productToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductServiceService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
    this.productToDisplay = this.productService.getProductById(this.productId);
  }

}
