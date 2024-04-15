import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: any;
  quantity: number =1;// Initialize quantity to 1
  // Initialize quantity to 1
  total: number | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = parseInt(params.get('id') || '', 10);
      // Here you should fetch product details by productId from your data source
      // For demonstration purpose, we are assuming you have a products array
      const products = [
        { 
          id: 1,
          imgSrc: 'https://markfeet.com/wp-content/uploads/2021/12/1-9.jpg', 
          name: 'ON Gold Whey', 
          newPrice: 140, 
          oldPrice: 165 
        },
        { 
          id: 2,
          imgSrc: 'https://richesm.com/wp-content/uploads/2023/03/Labrada-Nutrition-Iso-100-Whey-Protein-Isolate4.jpg', 
          name: 'labrada Nutrition', 
          newPrice: 100, 
          oldPrice: 120 
        },
        { 
          id: 3,
          imgSrc: 'https://images-cdn.ubuy.co.in/64e7a2cb92cf4e1696501cc6-bsn-syntha-6-cold-stone-creamery-whey.jpg', 
          rating: 5, 
          name: 'BSN Syntha 6', 
          newPrice: 110, 
          oldPrice: 130 
        },
        { 
          id: 4,
          imgSrc: 'https://nutrova.com/cdn/shop/products/Nutrova_NWPI_pouch_front_16012023_1800x1800.jpg?v=1677234335',
          name: 'Nutova Whey', 
          newPrice: 110, 
          oldPrice: 130 
        },
        { 
          id: 5,
          imgSrc: 'https://m.media-amazon.com/images/I/71OL79gRjDL._SL1500_.jpg', 
          rating: 5, 
          name: 'Muscle Tech(Nito Tech) Whey ISO', 
          newPrice: 110, 
          oldPrice: 130 
        },
        { 
          id: 6,
          imgSrc: 'https://drnutrition.com/storage/media/7d7MjkKuw9r2ePxY2pUkUR2t06bg6gKtt71ZXOxc.jpg', 
          rating: 5, 
          name: ' Dymatize Nutrition ', 
          newPrice: 110, 
          oldPrice: 130 
        },
       
      ];
      
      // Find the selected product from the products array
      this.selectedProduct = products.find(product => product.id === productId);
      this.calculateTotal();
    });
  }
 // Function to increase quantity
 increaseQuantity() {
  this.quantity++;
  this.calculateTotal();
}

// Function to decrease quantity
decreaseQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
    this.calculateTotal();
  }
}

calculateTotal() {
  if (this.selectedProduct) {
   
    this.total = this.quantity * this.selectedProduct.newPrice;
  }
}
  addToCart(product: any) {
    // Implement add to cart functionality here
    console.log('Product added to cart:', product);
    console.log('Product added to cart:', product);
    console.log('Quantity:', this.quantity);
    console.log('Total Price:', this.total);
   
  }
  isDescriptionVisible: boolean = false;
  starsRating: boolean = false;

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
  starRating(){
  this.starsRating = !this.starsRating;
}
}
