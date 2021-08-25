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
  views:string[] = ["list","card"];
  currentView = "list"

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["colorId"]) {
        this.getCarsByColorId(params["colorId"])
      } else if(params["brandId"]) {
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

  setView(view:string) {
    this.currentView = view;
  }

  getViewClass(view:string) {
    if(view == this.currentView) {
      return "btn btn-primary"
    } else {
      return "btn btn-secondary"
    }
  }

}
