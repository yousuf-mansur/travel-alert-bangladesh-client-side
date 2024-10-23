import { Component } from '@angular/core';
import { State } from '../../../../models/State/state';
import { StateService } from '../../../../services/State/state.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './state-create.component.html',
  styleUrl: './state-create.component.css'
})
export class StateCreateComponent {
  state: State = {
    stateName: '',
    countryID: 0,
  };

  constructor(private stateService: StateService, private router: Router) {}

  createState(): void {
    this.stateService.createState(this.state).subscribe((res:any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      alert('state add successfully!');
      this.router.navigateByUrl(res.requestUrl);
    });
  }
}