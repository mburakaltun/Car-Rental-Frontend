import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  selectedBrandId:number
  selectedBrand:Brand

  constructor(private brandService:BrandService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  carsListedSuccess(brand:Brand) {
    this.toastrService.success(this.selectedBrand.name, "Cars were listed");
  }
}
