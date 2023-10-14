import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "./interfaces/IProduct";
import {ProductsService} from "./services/products-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kupikolesa';
  products: Observable<IProduct[]>;
  constructor(private  productsService: ProductsService) {

  }

  ngOnInit(): void {
  this.products = this.productsService.getProducts()
  }
}
