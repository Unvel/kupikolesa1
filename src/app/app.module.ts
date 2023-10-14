import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main/main.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { HeaderComponent } from './components/common/header/header/header.component';
import { FooterComponent } from './components/common/footer/footer/footer.component';
import { ProductCardComponent } from './components/common/product-card/product-card/product-card.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import { MultiselectDropdownComponent } from './components/common/multiselect-dropdown/multiselect-dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    CartComponent,
    MultiselectDropdownComponent,
    ProductPageComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgMultiSelectDropDownModule.forRoot(), FormsModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
