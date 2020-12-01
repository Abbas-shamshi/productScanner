import { Component } from '@angular/core';
import { FetchProductInfoService } from '../services/fetch-product-info.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 productDetails:any=[];
 p_name:string;
 p_barcode:number;
 p_brand:string;
 p_category:string;
 p_color:string;
 p_description:string;
 p_images:any=[];

  constructor(
    private productInfo:FetchProductInfoService
  ) {}

  
  ngOnInit() {
    console.log("Entered in Init")
    this.productDetails = this.productInfo.barcodeData()
    this.p_images=this.productDetails[0]['images'];
    console.log(this.p_images.length)
    // this.p_name=this.
    console.log(this.productDetails[0]['barcode_number']);   //undefined
  }
}
