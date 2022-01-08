
export class Usuario{
  constructor(
    public nombre: string,
    public apellidos: string,
    public email: string,
    public mensaje: string
  ){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.mensaje = mensaje
  }
}
