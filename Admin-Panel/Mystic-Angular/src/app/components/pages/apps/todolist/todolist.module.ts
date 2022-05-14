import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [TodolistComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    TodolistRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class TodolistModule { }
