import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  products = [
    { 
      imgSrc: 'https://markfeet.com/wp-content/uploads/2021/12/1-9.jpg', 
      rating: 5, 
      name: 'Nutrition Supplements', 
      newPrice: 140, 
      oldPrice: 165 
    },
    { 
      imgSrc: 'https://richesm.com/wp-content/uploads/2023/03/Labrada-Nutrition-Iso-100-Whey-Protein-Isolate4.jpg', 
      rating: 5, 
      name: 'Nutrition Supplements', 
      newPrice: 100, 
      oldPrice: 120 
    },
    { 
      imgSrc: 'https://images-cdn.ubuy.co.in/64e7a2cb92cf4e1696501cc6-bsn-syntha-6-cold-stone-creamery-whey.jpg', 
      rating: 5, 
      name: 'Nutrition Supplements', 
      newPrice: 110, 
      oldPrice: 130 
    },
    { 
      imgSrc: 'https://nutrova.com/cdn/shop/products/Nutrova_NWPI_pouch_front_16012023_1800x1800.jpg?v=1677234335',
      name: 'Nutrition Supplements', 
      newPrice: 110, 
      oldPrice: 130 
    },
    { 
      imgSrc: 'https://m.media-amazon.com/images/I/71OL79gRjDL._SL1500_.jpg', 
      rating: 5, 
      name: 'Nutrition Supplements', 
      newPrice: 110, 
      oldPrice: 130 
    },
    { 
      imgSrc: 'https://drnutrition.com/storage/media/7d7MjkKuw9r2ePxY2pUkUR2t06bg6gKtt71ZXOxc.jpg', 
      rating: 5, 
      name: 'Nutrition Supplements', 
      newPrice: 110, 
      oldPrice: 130 
    },
  ];
}
