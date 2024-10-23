// src/app/models/url-service.model.ts
export interface UrlServiceDto {
  urlServiceId: number;
  currentUrl: string;
  description: string;
  requestUrl: RequestUrlDto;
}

export interface RequestUrlDto {
  requestUrlId: number;
  url: string;
  urlName: string;
}

export interface CreateUrlServiceDto {
  currentUrl: string;
  description: string;
  requestUrlId: number;
}

export interface CreateRequestUrlDto {
  url: string;
  urlName: string;
}

export interface RequestUrl {
  requestUrlId: number;
  url: string;
  urlName?: string; // optional property
}


export interface CurrentUrl {
  currentUrlId: number;
  url: string;
  title: string;
}

export interface UrlServiceModel {
  urlServiceId?: number; // Optional for the new entry
  requestUrlId: number;
  currentUrlId: number;
  description?: string; // Optional property
}

