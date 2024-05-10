import { Routes } from '@angular/router';
import { DeleteProductComponent } from './Presentation/Components/products/delete-product/delete-product.component';
import { BarcodeComponent } from './Presentation/Components/barcode/barcode.component';

export const routes: Routes = [
  {
    path: 'product/delete',
    component: DeleteProductComponent
  },
  {
    path: 'barcode',
    component: BarcodeComponent
  }
];
