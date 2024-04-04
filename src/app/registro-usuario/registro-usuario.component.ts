import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RegistroUsuarioDTO } from './RegistroUsuarioDTO';
import { FormsModule } from '@angular/forms';
import { RegistroUsuarioService } from './registro-usuario.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {

  usuario: RegistroUsuarioDTO = {
    nombre: '',
    fotoPerfil: '',
    nickname: '',
    email: '',
    password: '',
    ciudadResidencia: ''
  };

  constructor( private registroUsuarioService : RegistroUsuarioService) { }



  submitForm() {
    this.registroUsuarioService.registrarUsuario(this.usuario);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) {
      // Si hay un archivo seleccionado, puedes realizar operaciones adicionales aquí, como cargarlo a un servicio de almacenamiento en la nube o procesarlo de alguna otra manera.
      console.log('Archivo seleccionado:', file);
      this.usuario.fotoPerfil = file.name; // Asigna el archivo seleccionado al objeto usuario
    }
  }


}
