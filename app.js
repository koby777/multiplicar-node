const argv = require('./config/yargs').argv;
const color = require('colors');
const { multiplicacion, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        multiplicacion(argv.base)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);

// let base = 'abc';

// console.log(process.argv);

// let argv2 = process.argv;

// console.log(`La base es ${ argv.base } y el limite ${ argv.limite }`);


// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(base);

// multiplicacion(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));