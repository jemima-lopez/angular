

import { Injectable } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillaService{
  public zapatillas: Array<Zapatilla>;

  constructor(){
    this.zapatillas = [
      new Zapatilla('Reebook Clasic','Reebook','blanca',70,false),
      new Zapatilla('J23','Nike','azul',90,true),
      new Zapatilla('AX15','Nike','rojo',100,true),
      new Zapatilla('Nice','Adidas','gris',70,true),

    ];
  }

  getTexto(){
    return "Hola Mundo desde un servicio";
  }

  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }

}
