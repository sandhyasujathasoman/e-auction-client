import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuctionServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  fetchAllProduct() {
    return this.http.get("http://localhost:5050/e-auction/api/v1/seller/show-products", this.httpOptions);
  }

  getProduct(_request: string) {
  return this.http.get("http://localhost:5050/e-auction/api/v1/seller/show-products/" + _request, this.httpOptions);
  }

  getBids(_request: string) {
    return this.http.get("http://localhost:5050/e-auction/api/v1/seller/show-bids/" + _request, this.httpOptions);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post('http://localhost:5050/e-auction/api/v1/seller/add-product', data, this.httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}

