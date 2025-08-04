import clienteModel from "../models/cliente.js"

const clientesController ={
create:(request,response) => {
    response.send ("post works!!")
},
readAll:(request,response) => {
    response.send ("get all works!!")
},
readOne:(request,response) => {
    response.send ("get one works!!")
},
update:(request,response) => {
    response.send ("put works!!")
},
delete:(request,response) => {
    response.send ("delete works!!")
}
};

export default clientesController;
