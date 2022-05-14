import { Component, OnInit } from '@angular/core';
import email from '../../../../data/email.json';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }
  public email = email;
  ngOnInit(): void {
  }

}
