import { Component } from '@angular/core';
import { configuracion } from "./models/configuracion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  public title = 'Aprendiendo Angular';
  private readonly newProperty = true;
  public descripcion: string;
  public config;

  constructor(){
    this.config = configuracion;
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descipcion;
  }

  public mostrar_videojuego: Boolean = this.newProperty;

  ocultarVideojuego(value: Boolean){
    this.mostrar_videojuego = value;
  }
}
