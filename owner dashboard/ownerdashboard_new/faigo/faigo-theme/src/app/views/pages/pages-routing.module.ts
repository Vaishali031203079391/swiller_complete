import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './search/search.component';
import { SpecialsComponent } from './specials/specials.component';
import { EventsComponent } from './events/events.component';
import { OpeningsComponent } from './openings/openings.component';
import { WalletComponent } from './wallet/wallet.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'specials',
        component: SpecialsComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'openings',
        component: OpeningsComponent
    },
    {
        path: 'wallet',
        component: WalletComponent
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
