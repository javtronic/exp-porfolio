import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public _servicio = inject(InfoPaginaService);
  private router = inject(Router);

  // constructor(public _servicio: InfoPaginaService){}

  buscarProducto(termino:string){
    if(termino.length < 1){
      return;
    }

    this.router.navigate(['/search',termino]);
  }
}
