import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { GooglemapsRoutingModule } from './googlemaps-routing.module';
import { GooglemapsComponent } from './googlemaps.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [GooglemapsComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    GooglemapsRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg'
    })
  ]
})
export class GooglemapsModule { }
