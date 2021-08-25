import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44387/api";
  
  constructor(private httpClient:HttpClient) { }

  addRental(rental:Rental): Observable<SingleResponseModel<Rental>> {
    let newPath = this.apiUrl + "/rentals/add"
    return this.httpClient.post<SingleResponseModel<Rental>>(newPath, rental);
  }
}
