import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IProduct} from "../interfaces/IProduct";
import { Observable} from "rxjs";
import {ProductsService} from "../services/products-service.service";
import {Injectable, Input} from "@angular/core";

@Injectable( {
  providedIn: 'root'
})


export class FilteredProductsResolver implements Resolve<IProduct>{
  constructor(private ProductsService:ProductsService, private router: Router) {}

  @Input() filteredProducts: any;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct>  {
    return this.ProductsService.getFilteredProducts(route.params[this.filteredProducts])

  }

}
