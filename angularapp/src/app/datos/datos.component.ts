import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  fotos: any;

  constructor(private datosService: DatosService ){
    datosService.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.fotos = data
    })
  }
  
}
