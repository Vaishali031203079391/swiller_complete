import { Component, OnInit } from '@angular/core';
import offers_table from '../../../../../data/offers_table.json';

@Component({
  selector: 'app-specials-list',
  templateUrl: './specials-list.component.html',
  styleUrls: ['./specials-list.component.css']
})
export class SpecialsListComponent implements OnInit {

  offers: any[] = [];
  paginateData: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  pagetwo = 2;
  pagefull = 3;

  constructor() { }

  ngOnInit(): void {
    this.offers = offers_table;
    this.collectionSize = this.offers.length;
    this.getPremiumData();
  }


   getPremiumData(){
     this.paginateData =  this.offers.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }


}
