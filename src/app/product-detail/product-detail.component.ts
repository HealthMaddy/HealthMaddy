import { ProductListService } from "../services/product-list.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  productPrimaryMedia: string = "";
  quantity: number = 1; // Initialize quantity to 1
  // Initialize quantity to 1
  total: number | undefined;
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    public productService: ProductListService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id") || "";
      this.getProductDetail(productId);
    });
  }

  async getProductDetail(productId: string) {
    try {
      this.isLoading = true;
      this.product = await this.productService.getDataById(productId);
      this.productPrimaryMedia = this.productService.getPrimaryProductImage(
        this.product?.media
      );
      console.log("product --", this.product);
      this.calculateTotal();
    } catch (e) {
      console.log();
    } finally {
      this.isLoading = false;
    }
  }
  setPrimaryMedia(mediaUrl: string) {
    this.productPrimaryMedia =
      mediaUrl ||
      this.productService.getPrimaryProductImage(this.product?.media);
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
    if (this.product) {
      this.total = this.quantity * this.product.newPrice;
    }
  }
  addToCart(product: any) {
    // Implement add to cart functionality here
    console.log("Product added to cart:", product);
    console.log("Product added to cart:", product);
    console.log("Quantity:", this.quantity);
    console.log("Total Price:", this.total);
  }
  isDescriptionVisible: boolean = false;
  starsRating: boolean = false;

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
  starRating() {
    this.starsRating = !this.starsRating;
  }
}
