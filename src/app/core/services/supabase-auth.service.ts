import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  constructor(private http: HttpClient) {}

  getCloudflare() {
    const url = `/api/data`;
    return this.http.get<any>(url);
  }
}
