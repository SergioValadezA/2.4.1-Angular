import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from './Foto';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(  private httpClient:HttpClient) { 
    console.log("Servicio trabajando");
  }

  obtenerDatos(){
    return this.httpClient.get<Foto[]>('https://jsonplaceholder.typicode.com/Photos')
  }
}
