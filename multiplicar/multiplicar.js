const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${ i } = ${ base * i } \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla del ${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla ${ base }.txt`.red)
            console.log('El archivo ha sido creado!'.gray);

        });

    });

}



let multiplicacion = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= base; i++) {
            data += `${base} * ${ i } = ${ base * i } \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla del ${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla ${ base }.txt`)
            console.log('El archivo ha sido creado!');

        });

    });

}


module.exports = {
    multiplicacion,
    listarTabla
}