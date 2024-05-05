import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import { RegistroUsuarioDTO } from '../../dto/RegistroUsuarioDTO';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroUsuarioComponent {

  ciudades : string[];
  archivos!:FileList;

  usuario: RegistroUsuarioDTO = {
    nombre: '',
    fotoPerfil: '',
    nickname: '',
    email: '',
    password: '',
    confirmaPassword: '',
    ciudadResidencia: ''
  };

  constructor( private registroUsuarioService : RegistroUsuarioService) {
      this.ciudades = [];
      this.cargarCiudades();
  }

  private cargarCiudades(){
    this.ciudades = ['Bogotá',"Medellín","Cali","Barranquilla","Cartagena"];
  }

  submitForm() {
    if(this.usuario.fotoPerfil != ""){
      console.log(this.usuario);
      this.registroUsuarioService.registrarUsuario(this.usuario);
    }else{
      console.log("Debe cargar una foto");
    }
  }

  public sonIguales(): boolean {
    return this.usuario.password == this.usuario.confirmaPassword;
    }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.usuario.fotoPerfil = this.archivos[0].name; // Asigna el archivo seleccionado al objeto usuario
    }
  }


}
