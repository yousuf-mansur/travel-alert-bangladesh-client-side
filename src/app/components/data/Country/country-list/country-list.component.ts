import { Component, OnInit } from '@angular/core';
import { Country } from '../../../../models/Country/country';
import { CountryService } from '../../../../services/Country/country.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  imports: [CommonModule,FormsModule,ReactiveFormsModule , JsonPipe, RouterLink],
  standalone: true,
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getCountries().subscribe((countries: any) => {
      this.countries = countries.$values;
      console.log(countries);
      
    });
  }


  deleteCountry(id: number): void {
    if (confirm('Are you sure you want to delete this country?')) {
      this.countryService.deleteCountry(id).subscribe(() => {
        this.loadCountries();
      });
    }
  }
}
