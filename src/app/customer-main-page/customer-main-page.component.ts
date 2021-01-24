import { Component, OnInit } from '@angular/core';
import { SProductsService } from './../../app/s-products.service';

@Component({
  selector: 'app-customer-main-page',
  templateUrl: './customer-main-page.component.html',
  styleUrls: ['./customer-main-page.component.css']
})
export class CustomerMainPageComponent implements OnInit {

  amountOfProductLinks = 6;

  public products = [];
  public productIdCounter = 0;
  public amountOffProducts = 0; 

  constructor(private productService: SProductsService) { }

  subProduct(): void{
    if(this.amountOffProducts > 0){
      this.amountOffProducts--;
    }
  }

  addProduct(): void{
    this.amountOffProducts++;
  }

  addToShoppingCard(): void{
    this.amountOffProducts = 0;
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(data => this.products = data)

    console.log(this.products);
  }

}
