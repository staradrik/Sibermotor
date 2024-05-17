import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProductRepositoryService } from '../../../../Infrastructure/Repositories/productRepository.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [MessageService],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit{
  constructor(private productService: ProductRepositoryService, private messageService: MessageService,private router: Router){}

  productCode: string = "";

  ngOnInit() {
    this.productCode = this.productService.productCode;
  }

 deleteProduct(){
    this.productService.deleteProduct(this.productCode).then((data)=>{
      if (data.startsWith("Error: ")){
        this.messageService.add({severity:'error', summary:"Error", detail:data});
        return;
      }

      this.messageService.add({severity:'success', summary:"Eliminado con éxito", detail:data});
      setTimeout( ()=> { this.router.navigate(['/products'])}, 3000);

    });
  }

  goProductsList(){
    this.router.navigate([`/products`]);
  }
}
