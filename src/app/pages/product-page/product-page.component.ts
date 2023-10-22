import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../interfaces/IProduct";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit {
  @Input() product: IProduct;
  imageUrl: string;
  tabsList: string[] = ['Описание', 'Характеристики','Похожие товары', 'Отзывы']
  selectedTab: string = 'Описание';
  productCartCount: number = 4;

  constructor(private route: ActivatedRoute) { }

  minusCount() {
    if (this.productCartCount > 1)
    {
      return this.productCartCount--
    }
    else return this.productCartCount
  }

  plusCount() {
    if (this.productCartCount < this.product.count)
    {
      return this.productCartCount++
    }
    else return this.productCartCount
  }

  ngOnInit(): void {
     this.route.data.subscribe((data) => {
     this.product = data['data'];
     this.imageUrl = 'https://kupikolesa.it-trends.ru'+this.product.images[0].path
    })
   }

  openTab(tab: string) {
    this.selectedTab = tab
  }

}
