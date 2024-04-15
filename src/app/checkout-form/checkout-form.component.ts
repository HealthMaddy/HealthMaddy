import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent {
  firstName: string = '';
  LastName: string = ''
  email: string = '';
  contactNo : any = '';
  Description: string = '';
  sendMessage() {
    
  }
}
