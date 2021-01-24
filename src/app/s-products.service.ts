import { IProduct } from './i-product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SProductsService {

  public url = 'http://localhost:4200/assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url); 
  }

  // postProduct(product: IProduct): Observable<IProduct[]> {
  //   return this.http.post<IProduct[]>(this.url, product)
  //     .subscribe(response => console.log(response));
  //     )
  // } 

  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }

  // postProducts(): Observable<IProduct[]>{
  //   return this.http.post<IProduct[]>(this.url); 
  // }
}
