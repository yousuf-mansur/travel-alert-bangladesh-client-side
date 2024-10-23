import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../../../services/room/room.service';
import { Room } from '../../../../models/room/room';

@Component({
  selector: 'app-view-room',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './view-room.component.html',
  styleUrl: './view-room.component.css',
})
export class ViewRoomComponent implements OnInit {
  services = inject(RoomService);
  router = inject(Router);
  list: Room[] = [];
  roomId: number = 0; // For searching by ID

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.services.getAllRooms().subscribe((res) => {
      this.list = res;
      console.log(res);
    });
  }

  searchById() {
    if (this.roomId) {
      this.services.getRoomById(this.roomId).subscribe((res) => {
        this.list = [res]; // Show only the searched room
      });
    }
  }

  deleteItem(roo: Room) {
    const isConfirm = confirm('Are you sure to delete this?');
    if (isConfirm) {
      this.services.deleteRoom(roo.roomID).subscribe({
        next: (res) => {
          alert('Deleted successfully');

          // Call getList() to reload the data after deletion
          this.getList(); // This will refresh the list from the server after deletion
        },
        
      });
    }
  }

//  deleteItem(room: Room) {
//   const isConfirm = confirm('Are you sure to delete this?');
//   if (isConfirm) {
//     this.services.deleteRoom(room.roomID).subscribe({
//       next: (res) => {
//         alert(res); 
//         this.getList(); 
//       },
//       error: (err) => {
        
//         console.error('Error deleting room:', err);
       
//         this.getList(); 
//       }
//     });
//   }
// }


  createRoom() {
    this.router.navigate(['/add/room']); // Redirect to create room page
  }

  editRoom(roomId: number) {
    this.router.navigate(['/update/room/', roomId]); // Redirect to edit room page
  }
}
