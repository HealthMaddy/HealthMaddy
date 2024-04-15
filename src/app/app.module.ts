import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';
import { ClientSectionComponent } from './client-section/client-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CountdownComponent } from './countdown/countdown.component'; // Importing FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderSectionComponent,
    ProductSectionComponent,
    AboutSectionComponent,
    WhyUsSectionComponent,
    SubscribeSectionComponent,
    ClientSectionComponent,
    InfoSectionComponent,
    FooterSectionComponent,
    HomePageComponent,
    LoginPageComponent,
    ProductDetailComponent,
    ProductDialogComponent,
    ContactUsFormComponent,
    CartPageComponent,
    CheckoutFormComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
