import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProductRepositoryService } from '../../../../Infrastructure/Repositories/productRepository.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  constructor(private productService: ProductRepositoryService, private messageService: MessageService){}
  productCode: string = "";
  async deleteProduct(){
    await this.productService.deleteProduct(this.productCode).then((data)=>{
      if (data.startsWith("Error: ")){
        this.messageService.add({severity:'error', summary:"Error", detail:data});
        return;
      }

      this.messageService.add({severity:'success', summary:"Operacion exitosa", detail:data});
      console.log(data);
    });
  }
}
