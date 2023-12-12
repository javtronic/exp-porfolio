import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.iterface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos_idx: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-7ef38-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: any) => {

      console.log(resp);
      this.productos_idx = resp;
      
      setTimeout(() => {
        this.cargando = false;
      }, 2000);
      
    });
  }

}
