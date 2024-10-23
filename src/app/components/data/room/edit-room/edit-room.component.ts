import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../../../services/room/room.service';
import { Room } from '../../../../models/room/room';

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.css',
})
export class EditRoomComponent implements OnInit {
  services = inject(RoomService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  roomId: number = 0;
  room: Room = {} as Room;

  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['id'];
    this.services.getRoomById(this.roomId).subscribe((res) => {
      this.room = res;
    });
  }

  onSubmit() {
    this.services.updateRoom(this.roomId, this.room).subscribe(() => {
      alert('Room updated successfully!');
      this.router.navigate(['/rooms']); // Redirect to rooms list
    });
  }

  cancel() {
    this.router.navigate(['/rooms']); // Redirect to the room list
  }
}
