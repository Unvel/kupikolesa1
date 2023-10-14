import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {ProductResolver} from "./resolvers/product.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '*',
    redirectTo: '',
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
    resolve: {data: ProductResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
