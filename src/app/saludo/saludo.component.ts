import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  titulo: string = '¡Hola!';
  mensaje: string = 'Bienvenido a mi aplicación Angular.';
}

