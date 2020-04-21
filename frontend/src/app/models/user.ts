export class User {

    constructor(id='', nombreC = '', usuario='', estatura='', peso='', contrasena='', correo=''){
        this.id= id;
        this.nombreC= nombreC;
        this.usuario= usuario;
        this.estatura=  estatura;
        this.peso= peso;
        this.contrasena= contrasena;
        this.correo= correo;


    }
    id: String;
    nombreC: String;
    usuario: String;
    estatura: String;
    peso: String;
    contrasena: String;
    correo: String; 
}
