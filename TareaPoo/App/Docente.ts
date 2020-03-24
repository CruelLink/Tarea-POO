import mongoose = require("mongoose");
import {ICarrera, getCarrera} from "./Carrera"
import {connectMongoDB} from "./Helpers"

interface IDocente extends mongoose.Document { 
    name: string;
    edad: number;
    contrato: string;
    clasesActuales: number;
    Carrera: ICarrera
}

const DocenteSchema = new mongoose.Schema({
    name: { type: String, required: true},
    edad: {type: Number, required: false},
    contrato: {type: String, required: true},
    clasesActuales: {type: Number, required: false},
    Carrera: { type: mongoose.Schema.Types.ObjectId, ref: "Carrera" }
});


export const Docente = mongoose.model<IDocente>("Docente", DocenteSchema);

export const CreateDocente = async function(nameCarrera:string,name:string, edad:number, contrato:string,clasesActuales:number){
    //Conexión con la BD
    await connectMongoDB;
    //Obtener la Carrera en 
    const Carreer:any = await getCarrera(nameCarrera);

    //Persistencia 
    const C = new Docente();
    C.name = name;
    C.edad = edad;
    C.contrato = contrato;
    C.clasesActuales =  clasesActuales;
    C.Carrera = Carreer;

    C.save((err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(C);
        }
    });
}
