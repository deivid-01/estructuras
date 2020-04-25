export class User {

    constructor(id='', name = '', nickname='', estatura='', peso='', password='', email='',genero='',actividadFisica=''){
        this.id= id;
        this.name= name;
        this.nickname= nickname;
        this.estatura=  estatura;
        this.peso= peso;
        this.password= password;
        this.email= email;
        this.genero = genero;
        this.actividadFisica = actividadFisica;

        


    }
    id: String;
    name: String;
    nickname: String;
    estatura: String;
    peso: String;
    password: String;
    email: String; 
    genero:String;
    actividadFisica:String;
}
