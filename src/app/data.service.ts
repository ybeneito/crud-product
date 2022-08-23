import { product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendCreateRequest(product: product){
    return this.httpClient.post(this.REST_API_SERVER, product).subscribe()
  }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }

  public sendGetById(id: number) {
    return this.httpClient.get(this.REST_API_SERVER + "/" + id).pipe(retry(3), catchError(this.handleError));
  }

  public sendUpdateRequest(product: product){
    return this.httpClient.post(this.REST_API_SERVER + "/" + product.id, product).subscribe()
  }

  public sendDelete(id: number) {
    return this.httpClient.delete(this.REST_API_SERVER + "/"+ id).subscribe()
  }
}
