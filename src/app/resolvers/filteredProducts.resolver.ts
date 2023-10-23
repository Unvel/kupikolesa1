import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IProduct} from "../interfaces/IProduct";
import { Observable} from "rxjs";
import {ProductsService} from "../services/products-service.service";
import {Injectable, Input} from "@angular/core";

@Injectable( {
  providedIn: 'root'
})


export class FilteredProductsResolver implements Resolve<any>{
  constructor(private ProductsService:ProductsService, private router: Router) {}

  @Input() selectedItems: any;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    let stringURL = "https://kupikolesa.it-trends.ru/api/product?Skip=0&Take=12&CategoryId=5&Orientation=False&"
    console.log(this.selectedItems.length)
    for (let i = 0; i < this.selectedItems.length; i++) {
      stringURL += `Options[${i}].Id=${this.selectedItems[i].optionId}&Options[${i}].Values[${i}].Id=${this.selectedItems[i].id}&`
    }
    stringURL += "Price.Min=0&Price.Max=124586.52"
    console.log(stringURL)
    return this.ProductsService.getFilteredProducts(stringURL)

  }

}
