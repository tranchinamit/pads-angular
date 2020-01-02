// Subcategory
export interface ISubCategory {
  subCategoryId: number;
  subCategoryName: string;
}

export class SubCategoryDTO implements ISubCategory {
  subCategoryId: number = null;
  subCategoryName: string = null;

  constructor(data?: SubCategoryDTO) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  }
}

// Category
export interface ICategory {
  categoryId: number;
  categoryName: string;
  imageLink: string;
  subCategory: SubCategoryDTO[];
}

export class CategoryDTO implements ICategory {
  categoryId: number = null;
  categoryName: string = null;
  imageLink: string = null;
  subCategory: SubCategoryDTO[] = [];

  constructor(data?: CategoryDTO) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  }
}
