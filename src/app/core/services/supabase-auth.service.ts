import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  constructor(private http: HttpClient) {}

  getCloudflare() {
    const url = `/api/data`;
    return this.http.get<any>(url);
  }

  // login() {
  //   const URL = environment.supabase.URL + '/auth/v1/token?grant_type=password';
  //   const email = '';
  //   const password = '';

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       apikey: environment.supabase.PUBLIC_KEY,
  //     }),
  //   };

  //   return this.http.post(URL, { email, password }, httpOptions);
  // }
}
