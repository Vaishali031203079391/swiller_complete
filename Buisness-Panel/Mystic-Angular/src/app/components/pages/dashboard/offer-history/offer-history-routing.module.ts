import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferHistoryComponent } from './offer-history.component';

const routes: Routes = [{ path: '', component: OfferHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferHistoryRoutingModule { }
