import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodFeedComponent } from './food-feed.component';

const routes: Routes = [{ path: '', component: FoodFeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodFeedRoutingModule { }
