import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IProduct} from "../interfaces/IProduct";
import {catchError, EMPTY, Observable} from "rxjs";
import {ProductsService} from "../services/products-service.service";
import {Injectable} from "@angular/core";

@Injectable( {
  providedIn: 'root'
})

export class ProductResolver implements Resolve<IProduct>{
  constructor(private ProductsService:ProductsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct>  {
    return this.ProductsService.getProduct(route.params['id'])

  }

}
