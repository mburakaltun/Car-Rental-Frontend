import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44387/api/carimages"

  constructor(private HttpClient:HttpClient) { }

  getImagesCarById(id:number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "/getbycarid?carId=" + id
    return this.HttpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getFirstImageCarById(id:number): Observable<SingleResponseModel<CarImage>> {
    let newPath = this.apiUrl + "/getfirstimagebycarid?carId=" + id
    return this.HttpClient.get<SingleResponseModel<CarImage>>(newPath);
  }
}
