import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  
  private route = inject(ActivatedRoute);
  public productosService = inject(ProductosService);

  product?: ProductoDescripcion;
  id?: string;
  
  ngOnInit(): void {
   this.route.params
   .subscribe(param => {
    this.productosService.getProducto(param['id'])
    .subscribe((data: any) => {
      this.id = param['id'];
      this.product = data;
    });
   });
  }
}
