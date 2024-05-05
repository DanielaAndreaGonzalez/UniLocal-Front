import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemNegocioDTO } from '../../dto/ItemNegocioDTO';
import { NegociosService } from '../../servicios/negocios.service';

@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css',
})
export class GestionNegociosComponent {
  seleccionados: ItemNegocioDTO[];
  textoBtnEliminar: string;

  negocios: ItemNegocioDTO[];
  constructor(private NegociosService: NegociosService) {
    this.negocios = [];
    this.listarNegocios();
    this.seleccionados = [];
    this.textoBtnEliminar = '';
  }

  public listarNegocios() {
    this.negocios = this.NegociosService.listar();
  }

  public seleccionar(producto: ItemNegocioDTO, estado:boolean){
    if(estado){
      this.seleccionados.push(producto);
    }else{
      this.seleccionados.splice(this.seleccionados.indexOf(producto),1);
    }
    this.actualizarMensaje();
  }

  private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
    if (tam == 1) {
    this.textoBtnEliminar = "1 elemento";
    } else {
    this.textoBtnEliminar = tam + " elementos";
    }
    } else {
    this.textoBtnEliminar = "";
    }
  }
  public borrarNegocios(){
    this.seleccionados.forEach(n => {
      this.NegociosService.eliminar(n.codigoNegocio);
      this.negocios = this.negocios.filter(negocio => negocio.codigoNegocio !== n.codigoNegocio);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
  }

}
