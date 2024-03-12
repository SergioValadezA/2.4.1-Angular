import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-holamundo',
  standalone: true,
  imports: [UsuarioComponent, FormsModule],
  templateUrl: './holamundo.component.html',
  styleUrl: './holamundo.component.css'
})
export class HolamundoComponent {
    usuarios = [
      { id: 1, nombre: 'Armando' },
      { id: 2, nombre: 'Pedro' },
      { id: 3, nombre: 'Ana' },
      { id: 4, nombre: 'Juan' }
    ];
    id = 5;
    userToDelete='';

    isLogged = true;
    username= "Sergio";

    nombre:string = "Sergio";
    edad:number = 27;

    logout(){
      alert("Cerrar sesión");
      this.isLogged=false;
    }

    deleteUser(usuario:string){
      for (let i = 0; i < this.usuarios.length; i++){
        if (usuario == this.usuarios[i].nombre){
          this.usuarios.splice(i,1);
          break;
        }//Fin del if
      }//Fin del for
    }//Fin de deleteUser

    agregarUsuario(usuario:HTMLInputElement){
      //Agregamos el usuario al arreglo
      this.usuarios.push({id: this.id, nombre: usuario.value})

      //Limpiamos el valor del formulario
      usuario.value ="";

      //Incrementamos el id del usuario
      this.id++;

      //Cancelamos el evento de reiniciar la pagina
      usuario.focus();
      return false;
    
    }//Fin de arregloUsuario
}
