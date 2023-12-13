import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.iterface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos_idx: Producto[] = [];
  productosFiltrado: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise<void>( (resolve, reject) => {
      this.http.get('https://angular-html-7ef38-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {
        this.productos_idx = resp;
        this.cargando = false;
        resolve();
      });
      
    });
    
  }


  getProducto(id: string) {
    return this.http.get(`https://angular-html-7ef38-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){
    if(this.productos_idx.length === 0){
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
        });
    }else{
      this.filtrarProductos(termino);
    }
    
  }
  
  private filtrarProductos(termino: string){
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos_idx.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });
  }
}
