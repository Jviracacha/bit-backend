
import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect (process.env.MONGODB_ATLAS_URI);
        console.log( "MongoBD atlas connected successfully");
        
    }   catch (error) {
        console.log( "MongoBD atlas connection failed|Error:", error);
    }
}
export default connectDB;
//jonathanviracacha
//Ti1LefZV7ER5n72j
//mongodb+srv://jonathanviracacha:Ti1LefZV7ER5n72j@cluster0.z4mc2po.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0