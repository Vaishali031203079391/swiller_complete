import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpecialsComponent } from './specials/specials.component';
import { EventsComponent } from './events/events.component';
import { OpeningsComponent } from './openings/openings.component';
import { WalletComponent } from './wallet/wallet.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ],
  declarations: [UserProfileComponent, FaqComponent, SearchComponent, SpecialsComponent, EventsComponent, OpeningsComponent, WalletComponent, ContactusComponent, GalleryComponent]
})
export class PagesModule { }
