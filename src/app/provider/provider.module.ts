import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { ProviderNavComponent } from './provider-nav/provider-nav.component';
import { ProviderMyShopComponent } from './provider-my-shop/provider-my-shop.component';
import { ProviderMainPageComponent } from './provider-main-page/provider-main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderAddProductPageComponent } from './provider-add-product-page/provider-add-product-page.component';
import { KeyFiguresComponent } from './key-figures/key-figures.component';



@NgModule({
  declarations: [
    ProviderNavComponent,
    ProviderMyShopComponent,
    ProviderMainPageComponent,
    ProviderAddProductPageComponent,
    KeyFiguresComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ProviderNavComponent,
    ProviderMyShopComponent,
    ProviderMainPageComponent
  ]
})
export class ProviderModule { }
