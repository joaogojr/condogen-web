import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule, routingComponents } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { CostsComponent } from "./components/costs/costs.component";
import { ResidentsComponent } from "./components/residents/residents.component";
import { LoginComponent } from "./components/login/login.component";

import { MatInputModule } from '@angular/material/input';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';
import { FormsModule }   from '@angular/forms';
=======
>>>>>>> 28894585bc57d9ccad3144ac7dea1b702941aaa4

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routingComponents,
    CalendarComponent,
    CostsComponent,
    ResidentsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
