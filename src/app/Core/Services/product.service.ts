export interface productService{
  addProduct(barcode: string):Promise<string>;
  deleteProduct(barcode: string):Promise<string>;
  getProducts():Promise<product[]>;
  getProduct(barcode: string):Promise<product>;
}
export interface product{
  name: string;
  description: string;
  stock: number;
  price: number;
  barcode: string;
}
