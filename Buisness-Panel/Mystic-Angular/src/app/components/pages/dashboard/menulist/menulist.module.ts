import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistComponent } from './menulist.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { MenulistRoutingModule } from './content/menulist-routing.module';


@NgModule({
  declarations: [MenulistComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenulistRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class MenulistModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
