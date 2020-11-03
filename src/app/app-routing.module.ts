import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarningsComponent } from './warnings/warnings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CostsComponent } from './costs/costs.component';
import { ResidentsComponent } from './residents/residents.component';

const routes: Routes = [
    { path: 'avisos', component: WarningsComponent},
    { path: 'calendario', component: CalendarComponent},
    { path: 'gastos', component: CostsComponent},
    { path: 'moradores', component: ResidentsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [WarningsComponent, CalendarComponent, CostsComponent, ResidentsComponent]