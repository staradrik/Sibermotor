import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductRepositoryService } from '../../../../Infrastructure/Repositories/productRepository.service';
import { Product } from '../../../../Core/Services/product.service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
    InputNumberModule,
    ToolbarModule,
    InputTextareaModule
  ],
  providers: [MessageService],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit{

  productComplet: Product = {
    name: '',
    description: '',
    stock: 0,
    price: 0,
    barcode: ''
  };

  constructor(private productService: ProductRepositoryService, private messageService: MessageService,private router: Router){}

  ngOnInit() {
    this.productComplet = this.productService.productComplet;
  }

  goProductsList(){
    this.router.navigate([`/products`]);
  }

}
