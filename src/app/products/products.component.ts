import { Component, OnInit } from '@angular/core';

import { Product } from "../product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  constructor() { }

  products: Product[] =  JSON.parse(localStorage.getItem("products"));;

      prod : Product = {
        name : "a",
        price : 0,
        img : null
      };

      key : number;
      len : number = this.products.length;



  ngOnInit() {
    //if(JSON.parse(localStorage.getItem("products")))
  //  this.products = JSON.parse(localStorage.getItem("products"));
  }


      saveLocal() {
        localStorage.setItem("products", JSON.stringify(this.products));
        this.len = this.products.length;
      }


      deleteProd(item:Product){
        this.key = this.products.indexOf(item);
        this.products.splice(this.key,1);
        this.saveLocal();
      }

}
