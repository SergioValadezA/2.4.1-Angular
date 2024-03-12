import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() nombreUsuario = "";
  @Output() userToDelete = new EventEmitter<string>();


  sendToDelete(nameToDelete:string){
    //alert(nameToDelete);
    this.userToDelete.emit(nameToDelete);
  }
}