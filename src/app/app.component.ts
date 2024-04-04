import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistroUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-unilocal-proyecto-final';
}
