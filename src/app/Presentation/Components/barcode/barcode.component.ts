import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScannerQRCodeConfig, ScannerQRCodeSelectedFiles, NgxScannerQrcodeComponent, NgxScannerQrcodeService, ScannerQRCodeResult, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { MessageService} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProductRepositoryService } from '../../../Infrastructure/Repositories/productRepository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode',
  standalone: true,
  imports: [
    NgxScannerQrcodeModule,
    FormsModule,
    NgFor,
    ButtonModule,
    ToastModule,
    InputTextModule
  ],
  providers: [MessageService],
  templateUrl: './barcode.component.html',
  styleUrl: './barcode.component.css'
})
export class BarcodeComponent implements AfterViewInit{
  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    }
  };

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  public percentage = 80;
  public quality = 100;
  public Product = "";

  constructor(private qrcode: NgxScannerQrcodeService, private messageService: MessageService,
    private productService: ProductRepositoryService, private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      // this.handle(this.action, 'start');
    });
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    this.Product = e[0].value;
    console.log(this.Product);
    //agregar toast
    this.messageService.add({severity:'success', summary:"Operacion exitosa", detail:"Codigo producto: " + this.Product});
  }

  public async VerIn(){
    // console.log(this.Product)
    //condicional para enviar a ver detalles
    if (this.Product == null){
      this.messageService.add({severity:'error', summary:"Error", detail:"No fue posible leerlo"});
      return;
    }
     await this.productService.getProduct(this.Product).then((data)=>{
      if (data.description.startsWith("Error: ")){
        this.messageService.add({severity:'error', summary:"Producto no encontrado", detail:data.description});
        return;
      }
      this.messageService.add({severity:'success', summary:"Producto encontrado", detail:"Producto: " + data.name});
      //enviar a ver detalles
      this.router.navigate([`/product/detail/${data.barcode}`]);
     });

  }

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  public onDowload(action: NgxScannerQrcodeComponent) {
    action.download().subscribe(console.log, alert);
  }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files, this.percentage, this.quality).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }

}
