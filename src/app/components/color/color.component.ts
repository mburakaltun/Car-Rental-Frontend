import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = []
  selectedColor:Color

  constructor(private colorService:ColorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(): void {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  carsListedSuccess(color:Color) {
    this.toastrService.success(this.selectedColor.name, "Cars were listed");
  }
}
