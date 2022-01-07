import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private productsSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  products$ = this.productsSubject.asObservable();
  
  constructor(
    private httpClient: HttpClient
  ) { }
  

  async fetchProducts() {
    const products = await lastValueFrom(this.httpClient.get('/api/products'));
    this.productsSubject.next(products);
  }


  doSomething(name: string): Observable<any>{
    return of();
  }
}
