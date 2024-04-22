import { Product } from "../core/Interfaces/productInterfaces/product.interface";
import { Injectable } from "@angular/core";
import { BaseService } from "../core/api-firebase/base.service";

@Injectable({
  providedIn: "root",
})
export class ProductListService extends BaseService<Product> {
  constructor() {
    super("Product");
  }

  async createProduct(productFv: Product) {
    return await this.createRecord(productFv);
  }

  async getProductList() {
    let productsList = await this.getDataList();
    return productsList;
  }

  getPrimaryProductImage(
    imageList: { type: string; url: string; id: string }[] = []
  ) {
    return imageList?.find((el) => el?.type == "primary")?.url || "";
  }

  getSecondaryImageList(
    imageList: { type: string; url: string; id: string }[] = []
  ) {
    return imageList?.filter((el) => el?.type == "secondary") || [];
  }
}
