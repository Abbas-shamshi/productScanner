import { Component } from '@angular/core';
import { FetchProductInfoService } from '../services/fetch-product-info.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  productDetails: any = [];
  p_name: string;
  p_barcode: number;
  p_brand: string;
  p_category: string;
  p_color: string;
  p_images: any = [];
  temp: any = [];
  myDate: String = new Date().toISOString();
  mydate: any;
  constructor(
    private productInfo: FetchProductInfoService,
    private storage: Storage
  ) { }


  ngOnInit() {
    console.log(this.mydate);
    console.log("Entered in Init")
    this.productDetails = this.productInfo.barcodeData()
    this.p_images = this.productDetails[0]['images'];
    console.log(this.p_images.length)
    // this.p_name=this.
    console.log(this.productDetails[0]['barcode_number']);   //undefined


    // set a key/value
    this.storage.set('name', [{
      name: 'Lays',
      added: '2018',
      expires: '2020',
      image: 'https://images.barcodelookup.com/5219/52194594-1.jpg',
      deleted: 'false',
      used: 'true'
    },
    {
      name: 'Pringles',
      added: '2019',
      expires: '2021',
      image: 'https://images.barcodelookup.com/5219/52194594-2.jpg',
      deleted: 'false',
      used: 'false'
    }
    ]);

    this.storage.get('name').then((val) => {
      console.log('Your name is', val[1]['name']);
      var tempArr = [{
        name: 'Oreo',
        added: '2010',
        expires: '2020',
        image: 'https://images.barcodelookup.com/5219/52194594-1.jpg',
        deleted: 'false',
        used: 'true'
      }]
      this.temp = [...val, ...tempArr];
      console.log(this.temp)
      this.storage.set('name', this.temp);

    });

  }


  doSomething(date) {
    console.log(date);
    var dateFormat = date.split('T')[0];
    console.log(dateFormat);
    var sDate= dateFormat.split("-");
    var stringDate=sDate.toString();
    console.log(stringDate);


    /////Subtract Date
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate =new Date().getTime();
    const secondDate = new Date(stringDate).getTime();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log(diffDays);
  }
}
