export class User{
    idUser!:string;
    nom!: String;
    prenom!:String;
    mail!:String;
    role!:String;
    password!:String;
    numero!: String;
    //Patient-specific attributes
    age!:Number;
    sex!:String;
    weight!: Number;
    chronicDisease!: {
        type: Boolean,
        default: false,
      };
      
       // Doctor-specific attributes
  photo?: String;
  location?: String;
  speciality?: String;
  treatmentStartDate?: Date;
  treatmentEvents?: any[];



}