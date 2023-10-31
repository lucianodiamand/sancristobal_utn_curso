import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChauComponent } from './chau/chau.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

const rutas: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'uno', component: UnoComponent },
      { path: 'dos', component: DosComponent },
    ],
  },
  { path: 'chau/:id', component: ChauComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rutas, { enableTracing: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
