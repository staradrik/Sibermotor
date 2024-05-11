import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import { ProductRepositoryService } from '../../../Infrastructure/Repositories/productRepository.service';
import { Product } from '../../../Core/Services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ToastModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    InputTextModule
  ],
  providers: [MessageService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductRepositoryService, private messageService: MessageService, private router: Router){}

  products:Product[] = [];

  ngOnInit() {
    this.productService.getProducts().then((data)=>{
      this.products = data;
      console.log(this.products)
    });
  }

  goAddProduct(){
    this.router.navigate([`/product/add`]);
  }

  goBarcode(){
    this.router.navigate([`/barcode`]);
  }

}
