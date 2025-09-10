import { Schema,model } from "mongoose";

const registroSchema = new Schema ({
    name :{
        type: String,
    },
    enail :{
        type: String,
    },
    clave :{
        type: String,
    },
    foto :{
        type: String,
    }
},
{versionKey:false, timestamps:true}
);

export default model ("registro",registroSchema);