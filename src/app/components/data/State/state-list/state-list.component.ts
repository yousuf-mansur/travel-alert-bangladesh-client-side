import { Component, OnInit } from '@angular/core';
import { State } from '../../../../models/State/state';
import { StateService } from '../../../../services/State/state.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-state-list',
  standalone: true,
  imports: [CommonModule, RouterLink,JsonPipe],
  templateUrl: './state-list.component.html',
  styleUrl: './state-list.component.css'
})
export class StateListComponent implements OnInit {
  states: any[] = [];

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.loadStates();
  }

  loadStates(): void {
    this.stateService.getStates().subscribe((states:any) => {
      this.states = states.$values;
      console.log(states);
      
    });
  }

  deleteState(id: any): void {
    if (confirm('Are you sure you want to delete this state?')) {
      this.stateService.deleteState(id).subscribe(() => {
        this.loadStates();
      });
    }
  }
}
