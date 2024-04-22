import { Product } from "./../core/Interfaces/productInterfaces/product.interface";
import { ProductListService } from "../services/product-list.service";
import { Component, Input, OnInit } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-product-section",
  templateUrl: "./product-section.component.html",
  styleUrls: ["./product-section.component.scss"],
})
export class ProductSectionComponent implements OnInit {
  isLoading = false;
  @Input("showFewProducts") showFewProducts: boolean = false;
  //example product here..
  productFv: Product = {
    name: "Evil Series: Spell Pre Workout",
    description: `Experience the Power of Evil Series Spell Pre-Workout!

    Are you ready to supercharge your workouts like never before? Say hello to Spell Pre-Workout from Evil Series – your ultimate companion for dominating the gym and achieving your fitness goals.
    
    Crafted with precision and care, Spell Pre-Workout is designed to elevate every aspect of your workout routine. With our potent Muscle Fuel Blend, featuring Beta-Alanine, Creatine Monohydrate, and Creatine HCL, your muscles will be primed for peak performance and explosive strength.
    
    But we didn't stop there. Our Blood Flow Amplifier Blend, packed with L-Citrulline and L-Arginine, ensures optimal circulation, delivering essential nutrients and oxygen to your muscles for an unbeatable pump and endurance.
    
    And let's talk focus. Our Mind Control Matrix, powered by Caffeine Anhydrous and Vitamin B3, sharpens your mental clarity and boosts your mood, so you can stay locked in and crush your goals.
    
    But what sets Spell Pre-Workout apart is its versatility. Whether you're a seasoned gym-goer or just starting out, our formula is designed to meet you where you are. Beginners can ease in with half a scoop and still experience the magic.
    
    Safety is our priority. Spell Pre-Workout is intended for healthy adults aged 18 and above. As always, consult your healthcare professional before use, especially if you have any medical conditions or sensitivities.
    
    Ready to unleash the Spell? Simply mix one scoop with water 10 to 20 minutes before your workout, and get ready to redefine your limits.
    
    Join the Evil Series community and elevate your fitness journey today. With Spell Pre-Workout by your side, there's no challenge you can't conquer. Experience the power of Evil Series Spell Pre-Workout – where strength meets success.`,

    media: [
      {
        type: "primary",
        url: "https://firebasestorage.googleapis.com/v0/b/health-maddy-web-app.appspot.com/o/Product%2F1713615834735_WhatsApp%20Image%202024-04-13%20at%2012.14.45%20PM.jpeg?alt=media&token=0bd0ae30-84cd-4e02-98f9-35aef40e3ed7",
        id: "",
      },
      {
        type: "secondary",
        url: "https://firebasestorage.googleapis.com/v0/b/health-maddy-web-app.appspot.com/o/Product%2F1713615850317_WhatsApp%20Image%202024-04-13%20at%204.23.06%20PM.jpeg?alt=media&token=fe4e79f4-b660-4cde-b6f1-91b669df192f",
        id: "",
      },
      {
        type: "secondary",
        url: "https://firebasestorage.googleapis.com/v0/b/health-maddy-web-app.appspot.com/o/Product%2F1713615872764_WhatsApp%20Image%202024-04-13%20at%204.23.06%20PM%20(1).jpeg?alt=media&token=6bc1fb61-798f-4d04-92da-9a122c26f43e",
        id: "",
      },
      {
        type: "secondary",
        url: "https://firebasestorage.googleapis.com/v0/b/health-maddy-web-app.appspot.com/o/Product%2F1713615884820_WhatsApp%20Image%202024-04-13%20at%204.23.07%20PM.jpeg?alt=media&token=f24f248e-02cc-43c7-a2f2-b55a25d12d44",
        id: "",
      },
      {
        type: "secondary",
        url: "https://firebasestorage.googleapis.com/v0/b/health-maddy-web-app.appspot.com/o/Product%2F1713615895735_WhatsApp%20Image%202024-04-13%20at%204.23.07%20PM%20(1).jpeg?alt=media&token=8a6fd352-4c47-4a6f-ae38-6adc7e0383f4",
        id: "",
      },
    ],
    stock: [
      {
        flavourName: "Pina Colada",
        stockAvailableCount: 20,
      },
      {
        flavourName: "Watermelon",
        stockAvailableCount: 20,
      },
      {
        flavourName: "Gummy Candy",
        stockAvailableCount: 20,
      },
      {
        flavourName: "Litchi",
        stockAvailableCount: 20,
      },
      {
        flavourName: "Blue Berry",
        stockAvailableCount: 16,
      },
    ],
    originalPrice: "2699",
    discountPrice: "1890",
    currency: "INR",
    discountAmount: 30,
    discountUnit: "%", // % , or just rupees
    weight: "255", // 2kg , 3kg etc
    unit: "g", //kg etc..
    perContainerServing: 30,

    isInAppPurchaseAvailable: false,
    thirdPartyProductLink: "https://www.google.com/",
  };
  products: Product[] = [];
  originalProductsCount = 0;

  ngOnInit() {
    console.log("is show few products here ...", this.showFewProducts);
    this.getProductsList()
    // this.productService.createProduct(productFv);

    // let img = await this.productService.uplaodFile(this.fileUrl);
    // console.log("image stored here ..", img);
  }

  constructor(
    private router: Router,
    public productService: ProductListService
  ) {}

  async getProductsList() {
    try {
      this.isLoading = true;
      let data = await this.productService.getProductList();
      this.originalProductsCount = data.length;
      this.products = data;
      if (this.showFewProducts) {
        this.products = data.slice(0, 6);
        console.log("product list data here ...", data);
      } else {
        this.products = data;
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  redirectToDetailPage(product: any) {
    this.router.navigate(["/product-detail", product.id]);
  }
}
