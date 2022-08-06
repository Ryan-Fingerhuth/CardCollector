import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthorizeGuard } from "src/api-authorization/authorize.guard";
import { CardSetComponent } from "./card-set/card-set.component";
import { CounterComponent } from "./counter/counter.component";
import { CreateCardComponent } from "./create-card/create-card.component";
import { SearchCardComponent } from "./search-card/search-card.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'create-card', component: CreateCardComponent },
    { path: 'set/:id', component: CardSetComponent },
    { path: 'search-card', component: SearchCardComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }