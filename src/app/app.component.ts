import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { SupabaseAuthService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private supabaseAuthService: SupabaseAuthService) {}

  ngOnInit() {
    console.log('Service INIT');
    this.supabaseAuthService.getCloudflare().pipe(
      tap({
        next: val => {
          console.log('on next', val);
        },
        error: error => {
          console.log('on error', error.message);
        },
      })
    ).subscribe()
  }
}
