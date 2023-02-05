import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardSetComponent } from './card-set/card-set.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { SetListComponent } from './set-list/set-list.component';

const routes: Routes = [
  { path: '', component: SetListComponent, pathMatch: 'full' },
    { path: 'create-card', component: CreateCardComponent },
    { path: 'set/:id', component: CardSetComponent },
    { path: 'search-card', component: SearchCardComponent },
    { path: 'set-list', component: SetListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }