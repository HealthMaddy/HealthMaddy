import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent {
products = [
  { 
    id: 1,
    imgSrc: 'https://markfeet.com/wp-content/uploads/2021/12/1-9.jpg', 
    rating: 5, 
    name: 'Nutrition Supplements', 
    newPrice: 140, 
    oldPrice: 165 
  },
  { 
    id: 2,
    imgSrc: 'https://richesm.com/wp-content/uploads/2023/03/Labrada-Nutrition-Iso-100-Whey-Protein-Isolate4.jpg', 
    rating: 5, 
    name: 'Nutrition Supplements', 
    newPrice: 100, 
    oldPrice: 120 
  },
  { 
    id: 3,
    imgSrc: 'https://images-cdn.ubuy.co.in/64e7a2cb92cf4e1696501cc6-bsn-syntha-6-cold-stone-creamery-whey.jpg', 
    rating: 5, 
    name: 'Nutrition Supplements', 
    newPrice: 110, 
    oldPrice: 130 
  },
  { 
    id: 4,
    imgSrc: 'https://nutrova.com/cdn/shop/products/Nutrova_NWPI_pouch_front_16012023_1800x1800.jpg?v=1677234335',
    name: 'Nutrition Supplements', 
    newPrice: 110, 
    oldPrice: 130 
  },
  { 
    id: 5,
    imgSrc: 'https://www.shutterstock.com/image-vector/coming-soon-sale-poster-vector-600nw-160516937.jpg', 
    // imgSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcoming-soon-black&psig=AOvVaw2SA2HhaVgAQoZ522jfJIXT&ust=1711899686995000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICg2b2pnIUDFQAAAAAdAAAAABAE', 
    rating: 5, 
    name: 'Nutrition Supplements', 
    newPrice: 110, 
    oldPrice: 130 
  },
  { 
    id: 6,
    // imgSrc: 'https://img.freepik.com/premium-vector/black-lamp-with-words-coming-soon-it_745688-215.jpg?w=1380', 
    imgSrc: 'https://www.shutterstock.com/image-vector/coming-soon-sale-poster-vector-600nw-160516937.jpg', 
    rating: 5, 
    name: 'Nutrition Supplements', 
    newPrice: 110, 
    oldPrice: 130 
  },
];

  

  constructor(private router: Router) { }

  redirectToDetailPage(product: any) {
    this.router.navigate(['/product-detail', product.id]);
  }
  }
