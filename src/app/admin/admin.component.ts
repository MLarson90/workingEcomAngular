import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'app/product-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductServiceService]
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
  }

}
