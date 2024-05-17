import { Routes } from '@angular/router';
import { DeleteProductComponent } from './Presentation/Components/products/delete-product/delete-product.component';
import { AddProductComponent } from './Presentation/Components/products/add-product/add-product.component';
import { BarcodeComponent } from './Presentation/Components/barcode/barcode.component';
import { ProductsComponent } from './Presentation/Components/products/products.component';
import { LoginComponent } from './Presentation/Components/login/login.component';
import { DetailProductComponent } from './Presentation/Components/products/detail-product/detail-product.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
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
  },
  {
    path: 'product/detail',
    component: DetailProductComponent
  }
];
