import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreateRequestUrlDto,
  CreateUrlServiceDto,
  CurrentUrl,
  RequestUrl,
  RequestUrlDto,
  UrlServiceDto,
  UrlServiceModel,
} from '../../models/UrlService/url-service-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UrlServiceService {
  private baseUrl = 'http://localhost:5148/api/UrlService'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Get all RequestUrls
  getAllRequestUrls(): Observable<RequestUrl[]> {
    return this.http.get<RequestUrl[]>(`${this.baseUrl}/requesturls`);
  }

  // Get all CurrentUrls
  getAllCurrentUrls(): Observable<CurrentUrl[]> {
    return this.http.get<CurrentUrl[]>(`${this.baseUrl}/currenturls`);
  }

  // Add these methods to the UrlService

  createRequestUrl(requestUrl: RequestUrl): Observable<RequestUrl> {
    return this.http.post<RequestUrl>(
      `${this.baseUrl}/requesturls`,
      requestUrl
    );
  }

  createCurrentUrl(currentUrl: CurrentUrl): Observable<CurrentUrl> {
    return this.http.post<CurrentUrl>(
      `${this.baseUrl}/currenturls`,
      currentUrl
    );
  }

  createUrlService(urlService: UrlServiceModel): Observable<UrlServiceModel> {
    return this.http.post<UrlServiceModel>(`${this.baseUrl}`, urlService);
  }
}
