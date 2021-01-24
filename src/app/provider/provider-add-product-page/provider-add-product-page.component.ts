import { HttpClient } from '@angular/common/http';
import { SProductsService } from './../../s-products.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-provider-add-product-page',
  templateUrl: './provider-add-product-page.component.html',
  styleUrls: ['./provider-add-product-page.component.css']
})  
export class ProviderAddProductPageComponent implements OnInit {

  // id: number;
  // productName: string;
  // productDescription: string;
  // category: string;
  // price: number;
  // inventory: number;
  // availableAt: [];
  // imageUrl: string;
  // public url = 'http://localhost:4200/assets/products.json';
  public url = 'src\assets\products.json';

  constructor(private http: HttpClient) { }

  onSubmit(data){
    
    this.http.post(this.url, data)
      .subscribe((result) => {
        console.log("result", result)
      })
      console.log(data);
  }

  // postData(){

  //   let url = this.productService.url;

  //   this.http.post(url, {
  //     id: this.id,
  //     productName: this.productName,
  //     productDescription: this.productDescription,
  //     category: this.category,
  //     price: this.price,
  //     inventory: this.inventory,
  //     availableAt: this.availableAt,
  //     imageUrl: this.imageUrl
  //   }).toPromise().then((data: any) => {
  //     console.log(data)
  //     console.log(JSON.stringify(data.json.productName))
  //   })

  //   console.log(url);
  //   console.log(this.productService.getProducts);
  // }

  ngOnInit(): void {
  }

}
