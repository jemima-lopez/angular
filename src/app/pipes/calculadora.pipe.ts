
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{
  //dato | pipe calculadora:
  //parametro 1 | parametro 2
  transform(value: number, value2: number) {

    let operaciones = `
    Suma: ${value+value2}
    Resta: ${value-value2}
    Multi: ${value*value2}
    Divide: ${value/value2}
    `;
  }
}
