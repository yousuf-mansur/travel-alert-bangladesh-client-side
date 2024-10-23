import { Component, OnInit } from '@angular/core';
import { CurrentUrl, RequestUrl } from '../../../../models/UrlService/url-service-dto';
import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-list.component.html',
  styleUrl: './url-list.component.css'
})
export class UrlListComponent implements OnInit {
  requestUrls: RequestUrl[] = [];
  currentUrls: CurrentUrl[] = [];

  constructor(private urlService: UrlServiceService) {}

  ngOnInit(): void {
      this.loadRequestUrls();
      this.loadCurrentUrls();
  }

  loadRequestUrls(): void {
      this.urlService.getAllRequestUrls().subscribe(
          (data:any) => {
              this.requestUrls = data.$values;
          },
          (error:any) => {
              console.error('Error fetching request URLs:', error);
          }
      );
  }

  loadCurrentUrls(): void {
      this.urlService.getAllCurrentUrls().subscribe(
          (data:any) => {
              this.currentUrls = data.$values;
          },
          (error:any) => {
              console.error('Error fetching current URLs:', error);
          }
      );
  }
}