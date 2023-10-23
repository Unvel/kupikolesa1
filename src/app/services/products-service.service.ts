import {Inject, Injectable, Input} from '@angular/core';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
  }

  getSelectBarOptions() {
    return this.http.get<IProduct[]>('https://kupikolesa.it-trends.ru/api/Option/GetAll?catego\nryId=5&displayType=1');
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://kupikolesa.it-trends.ru/api/product/Popular');
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://kupikolesa.it-trends.ru/api/product/` + id)
  }

  getFilteredProducts(stringURL: any) {
  return this.http.get<IProduct>(stringURL)
  }




}
