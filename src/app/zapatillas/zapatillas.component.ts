
import { Component, OnInit } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatillas.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string;
    public zapatillas!: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public miMarca: string;

    constructor(
      private _zapatillaService: ZapatillaService
    ){
        this.miMarca = "Jem";
        this.color = 'red';
        this.marcas = new Array();

        this.titulo = "Componente de zapatillas";
        //console.log("zapatillas increibles");
    }

    ngOnInit(): void {
        this.zapatillas = this._zapatillaService.getZapatillas();
        alert(this._zapatillaService.getTexto());
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{

            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }


           // console.log(index);
        });

        console.log(this.marcas);
    }

    getMarca(){
        alert(this.miMarca);
    }

    addMarca(){
        this.marcas.push(this.miMarca);
    }

    borrarMarca(indice: number){
       // delete this.marcas[indice];
       this.marcas.splice(indice, 1);
    }

    onBlur(){
        console.log("Saliendo del Blur")
    }

    mostrarPalabra(){
        alert(this.miMarca);
    }
}

