import { Routes } from '@angular/router';
import { DeleteProductComponent } from './Presentation/Components/products/delete-product/delete-product.component';
import { AddProductComponent } from './Presentation/Components/products/add-product/add-product.component';

export const routes: Routes = [
  {
    path: 'product/add',
    component: AddProductComponent
  },
  {
    path: 'product/delete',
    component: DeleteProductComponent
  },
];
