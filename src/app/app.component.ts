import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistroUsuarioComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-unilocal-proyecto-final';
  footer = '© 2024 Unilocal. Todos los derechos reservados.';


  public buscarNumero(lista: number[],numero: number): boolean{
    /*let respuesta = false;

    for(let num in lista){
      if(lista[num] == numero){
        respuesta = true;
      }
    }*/
    return true;
  }




}


