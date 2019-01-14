import { Component, OnInit } from '@angular/core';

import { Product } from "../product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  constructor() { }

  products: Product[] =  JSON.parse(localStorage.getItem("products"));

      key : number;
      len : number = 0;
      //this.products? this.products.length : 0;



  ngOnInit() {
    //if(JSON.parse(localStorage.getItem("products")))
  //  this.products = JSON.parse(localStorage.getItem("products"));
  }


      saveLocal() {
        localStorage.setItem("products", JSON.stringify(this.products));
       // this.len = this.products.length;
      }


      deleteProd(item:Product){
        this.key = this.products.indexOf(item);
        this.products.splice(this.key,1);
        this.saveLocal();
      }

}
