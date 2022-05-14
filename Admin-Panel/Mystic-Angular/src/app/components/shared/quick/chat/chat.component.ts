import { Component, OnInit } from '@angular/core';
import chats from '../../../../data/chats.json';
import groups from '../../../../data/groups.json';
import contacts from '../../../../data/contact.json';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  public chats = chats;
  public groups = groups;
  public contacts = contacts;
  removeItem(item: number): void {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      this.chats.splice(item, 1);
    }
  }

  ngOnInit(): void {
  }

}
