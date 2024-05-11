import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Product } from '../../../../Core/Services/product.service';
import { ProductRepositoryService } from '../../../../Infrastructure/Repositories/productRepository.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import {InputTextareaModule} from 'primeng/inputtextarea';


@Component({
  selector: 'app-add-product',
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
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private productService: ProductRepositoryService, private messageService: MessageService){}
  product: Product = {
    name: '',
    description: '',
    stock: 0,
    price: 0,
    barcode: ''
  };
  async addProduct(){
    await this.productService.addProduct(this.product).then((data)=>{
      if (data.startsWith("Error: ")){
        this.messageService.add({severity:'error', summary:"Error", detail:data});
        return;
      }

      this.messageService.add({severity:'success', summary:"Operacion exitosa", detail:data});
      console.log(data);
    });
  }
}
