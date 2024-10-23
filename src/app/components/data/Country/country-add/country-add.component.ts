import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CountryService } from '../../../../services/Country/country.service';
import { Country } from '../../../../models/Country/country';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
})
export class CountryAddComponent {
  countryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private navigate: Router
  ) {
    this.countryForm = this.fb.group({
      countryName: ['', Validators.required],
    });
  }

  addCountry(): void {
    if (this.countryForm.valid) {
      const newCountry: any = {
        countryName: this.countryForm.value.countryName,
      };
      this.countryService.addCountry(newCountry).subscribe((res: any) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        alert('Country added successfully!');
        this.countryForm.reset();
        this.navigate.navigateByUrl(res.requestUrl);
      });
    }
  }
}
