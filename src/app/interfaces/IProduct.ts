export interface IProduct {
  categoryId: number;
  categoryName: string;
  count: number;
  description: string;
  id: number;
  images:
    [
      {
        id: number;
        path: string;
        productId: number | null;
        uid: string;
      }
    ],
  isFavorite: boolean;
  name: string;
  optionValues: {
    id: number;
    isSelected: boolean;
    optionId: number;
    optionName: string;
    parentName: string | null;
    value: string;
  };
  price: number;
}


