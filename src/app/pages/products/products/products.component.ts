import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  @Input() filteredProducts: any;
  productsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.data.subscribe((data) => {
      this.filteredProducts = data['data'];
    })
  }
}
