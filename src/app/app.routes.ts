import { Routes } from '@angular/router';
import { LoginComponent } from '../app/views/login/login.component'

export const ROUTES: Routes = [
  // Main redirect
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  // App views
  {
    path: '', component: LoginComponent,
    children: []
  },
  // Handle all other routes
  { path: '**', redirectTo: '/' }
]