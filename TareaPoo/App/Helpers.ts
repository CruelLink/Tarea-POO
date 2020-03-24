import mongoose = require("mongoose");
import { resolve } from "dns";

const uri: string = "mongodb+srv://CruelLink:CruelLink498@cluster0-vusif.azure.mongodb.net/tareapoo?retryWrites=true&w=majority";

export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
