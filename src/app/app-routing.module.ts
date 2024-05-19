import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutSectionComponent },
  { path: 'products', component: ProductSectionComponent },
  { path: 'product/:id', component: ProductDetailComponent }, // Route for the product detail page
  { path: 'why-us', component: WhyUsSectionComponent },
  { path: 'footer', component: FooterSectionComponent },
  { path: 'contact-us', component: ContactUsFormComponent },
  { path: 'Cart', component:CartPageComponent },
  { path: 'Checkout', component:CheckoutFormComponent }
  
  
];
// AppComponent,

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
