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

  getFilteredProducts(selectedItems: any) {
  let stringURL = "https://kupikolesa.it-trends.ru/api/product?Skip=0&Take=12&CategoryId=5&Orientation=False&"
    console.log(selectedItems.length)
    for (let i = 0; i < selectedItems.length; i++) {
      stringURL += `Options[${i}].Id=${selectedItems[i].optionId}&Options[${i}].Values[${i}].Id=${selectedItems[i].id}&`
    }
    stringURL += "Price.Min=0&Price.Max=124586.52"
    console.log(stringURL)
  return this.http.get<IProduct>(stringURL)
  }




}
