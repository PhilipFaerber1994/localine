import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SProductsService } from './../../app/s-products.service';

@Component({
  selector: 'app-product-link',
  templateUrl: './product-link.component.html',
  styleUrls: ['./product-link.component.css']
})
export class ProductLinkComponent implements OnInit {

  @Input() product;

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
  }

}
