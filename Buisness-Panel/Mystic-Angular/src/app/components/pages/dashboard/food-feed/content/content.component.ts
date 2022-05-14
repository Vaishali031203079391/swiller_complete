import { Component, OnInit, Input } from '@angular/core';
import posts_table from '../../../../../data/posts.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  posts: any[] = [];
  paginateData: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = this.posts.length;
  pagetwo = 2;
  pagefull = 3;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  defaultslide = [
    { bigimg:"assets/img/01.jpg", img: 'assets/img/01.jpg', title: 'Orange Sunset', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/slider-md/md-2.jpg", img: 'assets/img/wide/wide-2.jpg', title: 'Purple Skies', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/slider-md/md-3.jpg", img: 'assets/img/wide/wide-1.jpg', title: 'Night Light', text: 'Lorem Ipsum asit dolor kimet' },
  ];

  ngOnInit(): void {
    this.posts = posts_table;
    this.collectionSize = this.posts.length;
    this.paginateData =  this.posts.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getPremiumData(){
    this.collectionSize = this.posts.length;
    this.paginateData =  this.posts.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   }

   openmin(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-min' });
  }


}
