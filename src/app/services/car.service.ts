import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarSearch } from '../models/carSearch';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44387/api";

  constructor(private HttpClient:HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "/cars/getalldetails"
    return this.HttpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandId(brandId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "/cars/getalldetailsbybrandid?brandId=" + brandId
    return this.HttpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColorId(colorId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "/cars/getalldetailsbycolorid?colorId=" + colorId
    return this.HttpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarById(id:number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "/cars/getdetailsbyid?id=" + id
    return this.HttpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
}
