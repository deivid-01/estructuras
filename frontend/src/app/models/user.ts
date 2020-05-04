export class User {

    constructor(id='', name = '', nickname='', estatura=0, peso=0, password='', email='',genero='',actividadFisica=''){
        this.id= id;
        this.name= name;
        this.nickname= nickname;
        this.estatura=  0;
        this.peso= 0;
        this.password= password;
        this.email= email;
        this.genero = genero;
        this.actividadFisica = actividadFisica;

        


    }
    id: String;
    name: String;
    nickname: String;
    estatura: Number;
    peso: Number;
    password: String;
    email: String; 
    genero:String;
    actividadFisica:String;
}
