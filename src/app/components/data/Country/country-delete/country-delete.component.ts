import { Component, OnInit } from '@angular/core';
import { Country } from '../../../../models/Country/country';
import { CountryService } from '../../../../services/Country/country.service';

@Component({
  selector: 'app-country-delete',
  standalone: true,
  imports: [],
  templateUrl: './country-delete.component.html',
  styleUrl: './country-delete.component.css'
})
export class CountryDeleteComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getCountries().subscribe((countries: Country[]) => {
      this.countries = countries;
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