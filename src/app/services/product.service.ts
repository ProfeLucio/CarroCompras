import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(
    public http: HttpClient
  ) { }

  public getAll() {
    return this.http.get(environment.urlServidor + 'products');
  }
  public getId(id: string) {
    return this.http.get(environment.urlServidor + 'products/' + id);
  }
  public create(data: any) {
    return this.http.post(environment.urlServidor + 'products/add', data);
  }
}
