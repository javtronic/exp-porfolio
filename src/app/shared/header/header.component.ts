import { Component, inject } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public _servicio = inject(InfoPaginaService);

  // constructor(public _servicio: InfoPaginaService){}

}
