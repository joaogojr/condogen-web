import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WarningsComponent } from "./components/warnings/warnings.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { CostsComponent } from "./components/costs/costs.component";
import { ResidentsComponent } from "./components/residents/residents.component";

import { LoginComponent } from "./components/login/login.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

const routes: Routes = [
  {
    path: "",
    component: NavigationComponent,
    children: [
      { path: "avisos", component: WarningsComponent },
      { path: "calendario", component: CalendarComponent },
      { path: "gastos", component: CostsComponent },
      { path: "moradores", component: ResidentsComponent },
    ],
  },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  WarningsComponent,
  CalendarComponent,
  CostsComponent,
  ResidentsComponent,
];
