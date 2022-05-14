import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SortablejsModule } from 'ngx-sortablejs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Shared Components
import { TopbarComponent } from './topbar/topbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { QuickbarComponent } from './quickbar/quickbar.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatComponent } from './quick/chat/chat.component';
import { EmailComponent } from './quick/email/email.component';
import { InviteComponent } from './quick/invite/invite.component';
import { NotesComponent } from './quick/notes/notes.component';
import { ReminderComponent } from './quick/reminder/reminder.component';
import { TodoComponent } from './quick/todo/todo.component';
import { RecentactivityComponent } from './recentactivity/recentactivity.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [TopbarComponent, SidenavComponent, QuickbarComponent, SettingsComponent, ChatComponent, EmailComponent, InviteComponent, NotesComponent, ReminderComponent, TodoComponent, RecentactivityComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PerfectScrollbarModule,
    NgbModule,
    SortablejsModule
  ],
  exports: [TopbarComponent, SidenavComponent, QuickbarComponent, SettingsComponent, RecentactivityComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
