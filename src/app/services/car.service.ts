import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44387/api/cars/getalldetails";

  constructor(private HttpClient:HttpClient) { }

  getCarDetails(): Observable<CarDetailResponseModel> {
    return this.HttpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
