import { Component, OnInit } from '@angular/core';
import invoice_table from '../../../../../data/invoice_admin.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  invoice_details: any[] = invoice_table;

  invoice_data: any;
  invoice_date: Date;
  due_date: Date;

  constructor() { }
  invoiceproductlist = [
    {
      id: 1,
      offer: 'Weekend Offer',
      bookings: 150,
      revenue: 300
    },
    {
      id: 2,
      offer: 'Flat 50% Off',
      bookings: 170,
      revenue: 690
    },
    {
      id: 3,
      offer: 'Barrel Of Colors',
      bookings: 200,
      revenue: 1900
    },
    {
      id: 4,
      offer: 'Rs. 550 Cash back',
      bookings: 250,
      revenue: 900
    },
  ];
  public calculateprice() {
    return this.invoiceproductlist.reduce((subtotal, item) => subtotal + item.bookings * item.revenue, 0)
  };

  ngOnInit(): void {
  }

  onSearch(invoice_id: any){
    for (var index in this.invoice_details){
      if(this.invoice_details[index].invoice_number == invoice_id){
        this.invoice_data = this.invoice_details[index];
        //console.log(new Date(this.invoice_data.invoice_date.toString().replace(/(\d+[/])(\d+[/])/, '$2$1')));
        let d = this.invoice_data.invoice_date.toString().split('-');
        this.invoice_date = new Date(d);
        d = this.invoice_data.due_date.toString().split('-');
        this.due_date = new Date(d);
      }
    }
  }

}
