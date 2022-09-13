const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// const crearArchivo = (base) =>{

//     return new Promise((resolve, reject) => {

//         console.log('===============');
//         console.log(`Tabla del ${base}`);
//         console.log('===============');
        
//         let salida = '';

//         for (let i = 1; i<=10; i++ ){
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);

//         resolve(`tabla-${base}.txt`);
//         })
// }

//FORMA 2 --> ASYNC
// const crearArchivo = async(base) =>{

//     console.log('===============');
//     console.log(`Tabla del ${base}`);
//     console.log('===============');
        
//     let salida = '';

//     for (let i = 1; i<=10; i++ ){
//         salida += `${base} x ${i} = ${base * i}\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     return(`tabla-${base}.txt`);
        
// }

const crearArchivo = async(base, listar = false, hasta = 10) =>{

    try{
        
        let salida = '';

        for (let i = 1; i<=hasta; i++ ){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if ( listar ){
            console.log('===============');
            console.log(`Tabla del ${base}`);
            console.log('===============');
             
            console.log(salida);
        }
    

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla-${base}.txt`);
        
    }catch(err){
        throw err;
    }
 
}

module.exports = {
    crearArchivo
}