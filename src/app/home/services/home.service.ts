import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TabItem, Product, Banner } from 'src/app/shared';
import { environment } from 'src/environments/environment';
import { Channel, Ad } from '../domain';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}
  getTabs() {
    return this.http.get<TabItem[]>(`${environment.baseUrl}/tabs`);
  }
  getProductsByTab(tab: string) {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
      params: { categories_like: tab }
    });
  }
  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
  }
  getBanners() {
    return this.http.get<Banner[]>(`${environment.baseUrl}/banners`);
  }
  getAdsByTab(tab: string) {
    return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
      params: { categories_like: tab }
    });
  }
}
