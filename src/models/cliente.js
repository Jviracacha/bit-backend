import { Schema,model } from "mongoose";

const clienteSchema = new Schema ({
    fullName :{
        type: String,
    },
    birthDate :{
        type: Date,
    },
    correo :{
        type: String,
    },
    enrolled :{
        type: Boolean,
    }
},
{versionKey:false, timestamps:true}
);

export default model ("cliente",clienteSchema);