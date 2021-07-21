import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = {carId: 1, carName: 'Mercedes'};
  car2 = {carId: 2, carName: 'Porsche'};
  car3 = {carId: 3, carName: 'BMW'};
  car4 = {carId: 4, carName: 'Audi'};

  cars = [this.car1, this.car2, this.car3, this.car4];

  constructor() { }

  ngOnInit(): void {
  }

}
