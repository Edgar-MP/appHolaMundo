import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {

  // *ngIF
  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  }

  // *ngFor
  personajes: string[] = ['Spider-Man', 'Hulk', 'Thor', 'Daredevil']
}
