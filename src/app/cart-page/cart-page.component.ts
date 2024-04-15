import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartItems: any[] = [
    { 
      title: 'Dingo Dog Bones', 
      description: 'The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I\'m a fan.', 
      price: 12.99, 
      quantity: 2, 
      imageUrl: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
      totalPrice: 25.98 
    },
    { 
      title: 'Nutro™ Adult Lamb and Rice Dog Food', 
      description: 'Who doesn\'t like lamb and rice? We\'ve all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it\'s your dog\'s turn!', 
      price: 45.99, 
      quantity: 1, 
      imageUrl: 'https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png',
      totalPrice: 45.99 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  calculateSubtotal(): number {
    return this.cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
  }

  calculateTax(): number {
    return this.calculateSubtotal() * 0.05;
  }

  calculateGrandTotal(): number {
    return this.calculateSubtotal() + this.calculateTax() + 15; // Assuming shipping is fixed at $15
  }
  increaseQuantity(item: any): void {
    item.quantity++;
    item.totalPrice = item.quantity * item.price;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    }
  }
}
