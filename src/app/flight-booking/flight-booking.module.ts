import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  declarations: [
    FlightSearchComponent
  ],
  providers: [
    // FlightService
  ],
  exports: [
    FlightSearchComponent,
    SharedModule // CityPipe
  ]
})
export class FlightBookingModule { }
