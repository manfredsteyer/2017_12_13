import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClientTestingBackend } from '@angular/common/http/testing/src/backend';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: HttpClient;
  constructor(private flightService: FlightService) {
    //this.http = http;
  }

  ngOnInit() {
  }

  search(): void {

    this.flightService
        .find(this.from, this.to)
        .subscribe(
          flights => { this.flights = flights; },
          err => { console.error('error loading flights', err); }
        );


  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
