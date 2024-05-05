import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistroNegocioDTO } from '../../dto/RegistroNegocioDTO';
import { NegociosService } from '../../servicios/negocios.service';
import { Horario } from '../../dto/Horario';
import { ItemNegocioDTO } from '../../dto/ItemNegocioDTO';
import { TelefonoDTO } from '../../dto/TelefonoDTO';

@Component({
  selector: 'app-crear-negocio',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-negocio.component.html',
  styleUrl: './crear-negocio.component.css'
})
export class CrearNegocioComponent {

  registroNegocioDTO: RegistroNegocioDTO;
  horarios: Horario[];
  telefonos: TelefonoDTO[];
  archivos!:FileList;

  constructor(private negociosService: NegociosService) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
    this.horarios = [new Horario()];
    this.telefonos = [new TelefonoDTO()];
  }

  public crearNegocio(){
    this.registroNegocioDTO.horarios = this.horarios;

    this.registroNegocioDTO.telefonos = Array.from(this.telefonos)
    .map(telefono => telefono.numero)  // Mapea a los números, resultando en 'string | undefined'
    .filter((numero): numero is string => numero !== undefined);

    this.negociosService.crear(this.registroNegocioDTO);
    console.log(this.registroNegocioDTO);
  }

  public agregarHorario(){
    this.horarios.push(new Horario());
  }

  public agregarTelefono(){
    this.telefonos.push(new TelefonoDTO());
  }

  onFileChange(event: any){
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroNegocioDTO.imagenes = Array.from(this.archivos).map(file => file.name); // Asigna el archivo seleccionado al objeto usuario
    }
  }


}