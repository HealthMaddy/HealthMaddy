export interface Product {
  id?: string;
  name: string;
  description: string;
  media: Array<{
    type: string;
    url: string;
    id: string;
  }>;
  stock: Array<{
    flavourName: string;
    stockAvailableCount: number;
    externalLink: string;
  }>;
  originalPrice: string;
  discountPrice: string;
  currency: string;
  discountAmount: number;
  discountUnit: string; // % , or just rupees
  weight: string; // 2kg , 3kg etc
  unit: string; //kg etc..
  perContainerServing: number;

  isInAppPurchaseAvailable: boolean;
  thirdPartyProductLink: string;
}
