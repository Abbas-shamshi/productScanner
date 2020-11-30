import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  logs: any = [];
  barcodeNumber: string;

  constructor(
    private barcodeScanner: BarcodeScanner,
  ) { }
  scanBarcode() {
    console.log("In Scan function");
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);
      console.log('Barcode format', barcodeData.format);
      console.log('Barcode cancelled', barcodeData.cancelled);
      this.logs.push('Barcode data', barcodeData.text);
      this.logs.push('Barcode format', barcodeData.format);
      this.logs.push('Barcode cancelled', barcodeData.cancelled);
      this.barcodeNumber = barcodeData.text;
      // this.router.navigate(['/tab2', this.barcodeNumber]);
      this.logs.push('Next');

    }).catch(err => {
      console.log('Error', err);
    });
  }
}
