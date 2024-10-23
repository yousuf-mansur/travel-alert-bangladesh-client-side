// import { Component, inject } from '@angular/core';

// import { Router, RouterLink } from '@angular/router';

// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RoomService } from '../../../../services/room/room.service';
// import { Room } from '../../../../models/room/room';

// @Component({
//   selector: 'app-add-room',
//   standalone: true,
//   imports: [CommonModule, RouterLink, FormsModule],
//   templateUrl: './add-room.component.html',
//   styleUrl: './add-room.component.css',
// })
// export class AddRoomComponent {
//   roomService = inject(RoomService);
//   router = inject(Router);
//   room: Room = {} as Room;

//   errorMessage: string = '';

//   constructor() {}

//   onSubmit() {
//     this.roomService.addRoom(this.room).subscribe({
//       next: () => {
//         alert('Room created successfully');
//         this.router.navigate(['/add/room']);
//       },
//       error: (err) => {
//         this.errorMessage = err.message; // Display the custom error message
//       },
//     });
//   }

//   cancel() {
//     this.router.navigate(['/rooms']);
//   }
// }
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../../../services/room/room.service';
import { Room } from '../../../../models/room/room';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css',
})
export class AddRoomComponent {
  roomService = inject(RoomService);
  router = inject(Router);
  room: Room = {
    roomID:0,
    averagePrice: 0,
    maxOccupancy: 0,
    isAvailable: false,
    hotelID: 0,
    roomTypeID: 0,
    roomSubTypeID: 0,
  }; // Initialize with default values

  errorMessage: string = '';

  constructor() {}

  onSubmit() {
    // Validate the form data before sending it to the server
    if (!this.room.hotelID || !this.room.roomTypeID || !this.room.roomSubTypeID) {
      this.errorMessage = 'Please fill out all required fields correctly.';
      return;
    }

    this.roomService.addRoom(this.room).subscribe({
      next: () => {
        alert('Room created successfully');
        this.router.navigate(['/rooms']); // Navigate to the room list after successful creation
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Failed to create the room'; // Improved error handling
      },
    });
  }

  cancel() {
    this.router.navigate(['/rooms']);
  }
}
