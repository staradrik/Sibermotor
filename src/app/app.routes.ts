import { Routes } from '@angular/router';
import { DeleteProductComponent } from './Presentation/Components/products/delete-product/delete-product.component';
import { AddProductComponent } from './Presentation/Components/products/add-product/add-product.component';
import { BarcodeComponent } from './Presentation/Components/barcode/barcode.component';
import { ProductsComponent } from './Presentation/Components/products/products.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/add',
    component: AddProductComponent
  },
  {
    path: 'product/delete',
    component: DeleteProductComponent
  },
  {
    path: 'barcode',
    component: BarcodeComponent
  }
];
