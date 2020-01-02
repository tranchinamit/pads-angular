export interface IAds {
  adId: number;
  createdAt: number;
  accountId: number;
  accountOid: string;
  accountName: string;
  title: string;
  content: string;
  areaId: string;
  areaName: string;
  regionId: string;
  regionName: string;
  categoryId: number;
  categoryName: string;
  subCategoryId: number;
  subCategoryName: string;
  phone: string;
  price: number;
  priceString: string;
  avatar: string;
  condition: string;
}

export class AdsDTO implements IAds {
  adId: number = null;
  createdAt: number = null;
  createdAtDate?: string = null;
  accountId: number = null;
  accountOid: string = null;
  accountName: string = null;
  title: string = null;
  content: string = null;
  areaId: string = null;
  areaName: string = null;
  regionId: string = null;
  regionName: string = null;
  categoryId: number = null;
  categoryName: string = null;
  subCategoryId: number = null;
  subCategoryName: string = null;
  phone: string = null;
  price: number = null;
  priceString: string = null;
  imagesLink: string[] = [];
  avatar: string = null;
  condition: string = null;

  constructor(data?: AdsDTO) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  }
}
