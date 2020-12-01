import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchProductInfoService {
  apiKey: string = 'xqbzbl8rb1iby3eiz48380bc9yakb2';
  barcode: number = 9780140157376;
  products:any= [
    {
      "barcode_number": "886736874135",
      "barcode_type": "UPC",
      "barcode_formats": "UPC 886736874135, EAN 0886736874135",
      "asin": "B01KUHG2G8",
      "model": "CE-XL3200",
      "product_name": "Nike Red Running Shoes - Size 10",
      "category": "Apparel & Accessories > Shoes",
      "brand": "Nike",
      "color": "Red",
      "description": "One of a kind, Nike Red Running Shoes that are great for walking, running and sports.",
      "features": [
        "Gender: Female",
        "Size: US 7½",
        "Width: Medium",
      ],
      "images": [
        "https://images.barcodelookup.com/5219/52194594-1.jpg",
        "https://images.barcodelookup.com/5219/52194594-2.jpg",
        "https://images.barcodelookup.com/5219/52194594-3.jpg"
      ],
      "stores": [
        {
          "store_name": "Newegg.com",
          "store_price": "41.38",
          "product_url": "https://www.newegg.com/product-url",
          "currency_code": "USD",
          "currency_symbol": "$"
        },
        {
          "store_name": "Jet.com",
          "store_price": "45.24",
          "product_url": "https://www.jet.com/product-url",
          "currency_code": "USD",
          "currency_symbol": "$"
        },
      ],
      "reviews": [
        {
          "name": "Josh Keller",
          "rating": "5",
          "title": "Love these shoes!",
          "review": "A stylish and great fitting shoe for walking and running.",
          "datetime": "2015-03-19 21:48:03"
        },

      ]
    }
  ]
  constructor() { }
  barcodeData(){
    return this.products
  }
}
