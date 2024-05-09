export interface productService{
  addProduct(barcode: string):void;
  deleteProduct(barcode: string):void;
  getProducts():product[];
  getProduct(barcode: string):product;
}
export interface product{
  name: string;
  description: string;
  stock: number;
  price: number;
  barcode: string;
}
