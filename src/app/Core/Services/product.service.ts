export interface productService{
  addProduct(product: Product):Promise<string>;
  deleteProduct(barcode: string):Promise<string>;
  getProducts():Promise<Product[]>;
  getProduct(barcode: string):Promise<Product>;
}
export interface Product{
  name: string;
  description: string;
  stock: number;
  price: number;
  barcode: string;
}
