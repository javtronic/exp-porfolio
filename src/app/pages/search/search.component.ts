import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  private route = inject(ActivatedRoute);
  public productosService = inject(ProductosService);

  ngOnInit(): void {
    this.route.params
   .subscribe(param => {
     this.productosService.buscarProducto(param['termino']);
   });
  }
}
