import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  products:any=[];
  constructor(
    private storage:Storage
  ) {}

  ngOnInit(){
    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      // console.log('Your name is', val[1]['name']);
      this.products=val;
      console.log(this.products)
    });
  }
}
