import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: Response;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.get().subscribe(res => {
       this.countries = res;
    });
  }

}
