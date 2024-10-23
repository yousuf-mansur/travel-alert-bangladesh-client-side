import { Component, OnInit } from '@angular/core';
import { State } from '../../../../models/State/state';
import { StateService } from '../../../../services/State/state.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state-edit',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './state-edit.component.html',
  styleUrl: './state-edit.component.css',
})
export class StateEditComponent implements OnInit {
  state: State = {
    stateName: '',
    countryID: 0,
  };
  id!: number;

  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.stateService.getState(this.id).subscribe((state) => {
      this.state = state;
    });
  }

  updateState(): void {
    this.stateService.updateState(this.id, this.state).subscribe((res: any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      alert('state update successfully!');
      this.router.navigateByUrl(res.requestUrl);
    });
  }
}
