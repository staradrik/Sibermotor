import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProductRepositoryService } from '../../../../Infrastructure/Repositories/productRepository.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
  ],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  constructor(private productService: ProductRepositoryService){}
  idProduct: string = "";
  deleteProduct(){

  }
}
