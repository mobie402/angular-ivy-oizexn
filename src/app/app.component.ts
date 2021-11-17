import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: Array<any> = [];
  subt = 0;
  Ttal = 0;
  Taxes = 0;
  
  newItem: any = {};
  options = [
    { name: 'Please Select...', price: 0 },
    { name: 'apples', price: 1.19 },
    { name: 'peaches', price: 1.39 },
    { name: 'pears', price: 1.69 },
    { name: 'plums', price: 1.59 },
  ];

  addItems() {
    this.items.push(this.newItem);
    // console.log(this.items);
    this.newItem = {};
    this.subTotal();
  }

  removeItem(index) {
    this.items.splice(index, 1); // remove 1 item at ith place
    this.subTotal();
  }
  subTotal() {
    this.subt=0
    for (var i = 0; i < this.items.length; ++i) {
      console.log(this.items[i].name.price);
      console.log(this.items[i].quantity);
      this.subt = this.subt + this.items[i].quantity * this.items[i].name.price;
    }
    this.Total();
  }
  Total() {
    this.Taxes = (this.subt * 7) / 100;
    this.Ttal = this.subt + this.Taxes;
  }
}
