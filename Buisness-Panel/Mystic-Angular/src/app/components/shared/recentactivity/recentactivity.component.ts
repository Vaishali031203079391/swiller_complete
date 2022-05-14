import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentactivity',
  templateUrl: './recentactivity.component.html',
  styleUrls: ['./recentactivity.component.css']
})
export class RecentactivityComponent implements OnInit {

  constructor() { }
  activityToggle = () => {
    document.getElementById('ms-recent-activity').classList.toggle('ms-aside-open');
    document.getElementById('overlayright').classList.toggle('d-block');
  }

  ngOnInit(): void {
  }

}
