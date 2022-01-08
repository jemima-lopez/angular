

import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
//import { VideojuegoComponent } from '../../../../aprendiendo-angular/src/app/videojuego/videoJuego.component';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "otro componente";
        
        console.log("Cargando archivo con normalidad");
    }

    ngOnInit(): void {
        console.log("OnInit en ejecucion");
    }

    ngDoCheck(): void {
        console.log("DoCheck en ejecucion");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "nuevo titulo";
    }
}