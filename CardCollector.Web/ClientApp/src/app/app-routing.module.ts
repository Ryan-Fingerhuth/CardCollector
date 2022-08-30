import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardSetComponent } from './card-set/card-set.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'create-card', component: CreateCardComponent },
    { path: 'set/:id', component: CardSetComponent },
    { path: 'search-card', component: SearchCardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }