import { Component, OnInit } from '@angular/core';
import { Product} from "../product";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  prod : Product = {
    name : "",
    price : null,
    img : null,
    qty : null,
    desc : ""
  };

  key : number;

  products : Product [] = [];
  /*[{
    name : 'p1',
    price : 1,
    img : null
  }];
*/
  edit: number = 0;

  ngOnInit() {
    if(localStorage.getItem("products"))
    this.products = JSON.parse(localStorage.getItem("products"));
    if(this.route.snapshot.paramMap.get('id'))
   this.editProd(this.route.snapshot.paramMap.get('id'));
  }

  saveLocal() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  clearFields(){
    this.prod=new Product;
  }

  storeImg(event){
//console.log(event);

    let imgs = event.target.files;
    let base=[];
    for (let i=0; i<imgs.length; i++) {

      const reader=new FileReader();
      reader.onload=function(){
        const base64=reader.result;
        base.push(base64);
      }
      reader.readAsDataURL(imgs[i]);
    }
    console.log(event);
    console.log(base);
    this.prod.img = base;

  }

  addProd ():void {
    let newProd = new Product();
    newProd.name = this.prod.name;
    newProd.price = this.prod.price;
    newProd.img = this.prod.img;
    newProd.desc = this.prod.desc;
    newProd.qty = this.prod.qty;
    this.products.push(newProd);
    console.log(this.products);
    this.saveLocal();
    this.clearFields();
  }

  editProd (id):void{
    this.prod=this.products[id];
    this.edit = 1;
  }

  saveProd (): void {
    let newProd = new Product();
    newProd.name = this.prod.name;
    newProd.price = this.prod.price;
    newProd.img = this.prod.img;
    newProd.desc = this.prod.desc;
    newProd.qty = this.prod.qty;
    this.products[this.key] = newProd;
    this.edit=0;
    this.saveLocal();
    this.clearFields();
 
  }
}
