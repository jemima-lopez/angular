import { Component, OnInit } from '@angular/core';
import { isLabeledStatement } from 'typescript';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.sass'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public fecha: any;

  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService
  ){
    this.new_user = {
      "name": " ",
      "job": " "
}
  }

  ngOnInit(): void {

    this.fecha = new Date();




    this._peticionesService.getUser().subscribe(
      result =>{
        this.user = result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: { reset: () => void; }){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        console.log(response);

        form.reset();
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
