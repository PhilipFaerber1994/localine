
import { CustomerFilterSectionComponent } from './customer-filter-section/customer-filter-section.component';
import { CustomerMainNavComponent } from './customer-main-nav/customer-main-nav.component';
import { CustomerMainPageComponent } from './customer-main-page/customer-main-page.component';

import { ProviderModule } from './provider/provider.module';
import { AboutLocalineComponent } from './about-localine/about-localine.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutLocalineNavComponent } from './about-localine-nav/about-localine-nav.component';
import { LocalineInfoPageComponent } from './localine-info-page/localine-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductLinkComponent } from './product-link/product-link.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutLocalineComponent,
    PageNotFoundComponent,
    MainNavComponent,
    AboutLocalineNavComponent,
    LocalineInfoPageComponent,
    CustomerMainPageComponent,
    CustomerMainNavComponent,
    CustomerFilterSectionComponent,
    ProductLinkComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProviderModule,
    HttpClientModule,
    ProviderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
