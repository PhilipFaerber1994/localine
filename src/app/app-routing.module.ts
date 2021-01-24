import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProviderMyShopComponent } from './provider/provider-my-shop/provider-my-shop.component';
import { KeyFiguresComponent } from './provider/key-figures/key-figures.component';
import { ProviderAddProductPageComponent } from './provider/provider-add-product-page/provider-add-product-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerMainPageComponent } from './customer-main-page/customer-main-page.component';
import { AboutLocalineComponent } from './about-localine/about-localine.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderMainPageComponent } from './provider/provider-main-page/provider-main-page.component';

const routes: Routes = [  
  { 
    path: 'about-localine',
    pathMatch: "full",
    component: AboutLocalineComponent
  },
  {
    path: 'provider',
    children: [
      {
        path: "",
        component: ProviderMainPageComponent
      },
      {
        path: "kennzahlen",
        component: KeyFiguresComponent
      },
      {
        path: 'provider-add-product',
        component: ProviderAddProductPageComponent
      },
    ]
  },  
  {
    path: 'customer',
    children: [
      {
        path: "",
        component: CustomerMainPageComponent
      },
      {
        path: "einkaufswagen",
        component: ShoppingCartComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
