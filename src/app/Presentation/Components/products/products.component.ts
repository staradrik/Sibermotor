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
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ToastModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    FormsModule,
    InputTextModule
  ],
  providers: [MessageService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductRepositoryService, private messageService: MessageService, private router: Router){}

  products:Product[] = [];
  searchBox: string = "";

  ngOnInit() {
    this.productService.getProducts().then((data)=>{
      this.products = data;
    });
  }

  goAddProduct(){
    this.router.navigate([`/product/add`]);
  }

  goBarcode(){
    this.router.navigate([`/barcode`]);
  }

  searchProduct(){
    this.productService.getProduct(this.searchBox).then((data: Product)=> {
      if (data.description.startsWith("Error: ")){
        this.messageService.add({severity:'error', summary:"Error", detail:data.description});
        return;
      }
      this.messageService.add({severity:'success', summary:"Producto encontrado: ", detail:data.name});
      this.router.navigate([`/product/detail/${data.barcode}`]);
    })
  }

    logout(){
      console.log("logout")
      this.router.navigate([``]);
    }
    
  goDeleteProduct(productCode:string){
    this.productService.productCode = productCode;
    this.router.navigate([`/product/delete`]);
  }

}
