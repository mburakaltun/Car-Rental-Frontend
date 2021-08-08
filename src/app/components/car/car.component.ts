import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarSearch } from 'src/app/models/carSearch';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[] = [];
  
  dataLoaded = false;

  _carSearch:CarSearch = {
    colorId: 0,
    brandId: 0
  }

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["colorId"]) {
        //this._carSearch.colorId = params["colorId"]
        //this.getCarsBySearch(this._carSearch)
        this.getCarsByColorId(params["colorId"])
      } else if(params["brandId"]) {
        //this._carSearch.brandId = params["brandId"]
        //this.getCarsBySearch(this._carSearch)
        this.getCarsByBrandId(params["brandId"])
      } else {
        this.getCarDetails()
      }
    })
  }

  getCarDetails(): void {
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId:number):void {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColorId(colorId:number): void {
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsBySearch(carSearch:CarSearch): void {
    this.carService.getCarsBySearch(carSearch).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

}
