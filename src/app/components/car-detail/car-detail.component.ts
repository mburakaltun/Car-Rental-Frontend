import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { RentalPaymentComponent } from '../rental-payment/rental-payment.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail:CarDetail;
  dataLoaded = false;
  carImages:CarImage[] = [];
  carImageBasePath:string = "https://localhost:44387/Images/";
  imagePaths:string[] = []
  activeImage:CarImage;
  activeImageIndex = 0;
  pickUpDate:Date;
  dropOffDate:Date;
  rental:Rental;
  rentalSuccess:boolean = false;
  errorMessage:string = ""

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private carService:CarService, 
    private carImageService:CarImageService,
    private rentalService:RentalService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetail(params["carId"]);
      this.getImagesByCarId(params["carId"])
    })
  }

  getCarDetail(id:number):void {
    this.carService.getCarById(id).subscribe(response => {
      this.carDetail = response.data
      this.dataLoaded = true
    })
  }

  getImagesByCarId(id:number):void {
    this.carImageService.getImagesCarById(id).subscribe(response => {
      this.carImages = response.data;
      for(let carImage of this.carImages) {
        carImage.carImagePath = this.carImageBasePath + id + "/" + carImage.carImagePath;
      }
      this.setFirstImageActive();
    })
  }

  setFirstImageActive():void {
    if(this.carImages.length > 0) {
      this.activeImage = this.carImages[0]
      this.activeImageIndex = 0;
    }
  }

  setNextImageActive():void {
    if(this.activeImageIndex == this.carImages.length-1) {
      this.activeImageIndex = 0
      this.activeImage = this.carImages[this.activeImageIndex];
    } else {
      this.activeImageIndex += 1;
      this.activeImage = this.carImages[this.activeImageIndex];
    }
  }

  setPrevImageActive():void {
    if(this.activeImageIndex == 0) {
      this.activeImageIndex = this.carImages.length-1;
      this.activeImage = this.carImages[this.activeImageIndex];
    } else {
      this.activeImageIndex -= 1;
      this.activeImage = this.carImages[this.activeImageIndex];
    }
  }

  getCurrentClass(carImage:CarImage) {
    if(carImage == this.activeImage) {
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

  getRentButtonClass():string {
    if(this.pickUpDate < this.dropOffDate) {
      return "btn btn-success mt-2";
    }
    return "btn btn-danger mt-2 disabled";
  }

  addRental():void {
    let num = this.carDetail.carId
    this.rental = {
      carId: num,
      userId: 1,
      rentDate: this.pickUpDate,
      returnDate: this.dropOffDate
    }
    this.rental.carId = num;
    this.rental.userId = 1;
    this.rental.rentDate = this.pickUpDate;
    this.rental.returnDate = this.dropOffDate;
    this.rentalService.addRental(this.rental).subscribe(data => {
      this.rentalSuccess = data.success
      if(!this.rentalSuccess) {
        this.errorMessage = data.message;
      } else {
        this.router.navigate(["/payment/" + this.carDetail.carId])
      }
    })
  }
}
