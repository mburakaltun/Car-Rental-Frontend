import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorFilterPipe } from '../pipes/color-filter.pipe';
import { BrandFilterPipe } from '../pipes/brand-filter.pipe';
import { RouterModule } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { RentalPaymentComponent } from './components/rental-payment/rental-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    ColorFilterPipe,
    BrandFilterPipe,
    CarDetailComponent,
    RentalPaymentComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
