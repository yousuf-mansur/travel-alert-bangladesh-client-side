import { Component, OnInit } from '@angular/core';
import { Country } from '../../../../models/Country/country';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../../../services/Country/country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-edit',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.css'
})
export class CountryEditComponent implements OnInit {
  countryForm: FormGroup;
  countryId!: number;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private route: ActivatedRoute,
    private navigate : Router
  ) {
    this.countryForm = this.fb.group({
      countryName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.countryId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCountry();
  }

  loadCountry(): void {
    this.countryService.getCountryById(this.countryId).subscribe((country: Country) => {
      this.countryForm.patchValue({
        countryName: country.countryName
      });
    });
  }

  updateCountry(): void {
    if (this.countryForm.valid) {
      const updatedCountry: Country = {
        countryID: this.countryId,
        countryName: this.countryForm.value.countryName
      };
      this.countryService.updateCountry(this.countryId, updatedCountry).subscribe((res:any) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        alert('Country updated successfully!');
        this.navigate.navigateByUrl(res.requestUrl)
      });
    }
  }
}