const opts = {
    base: {
        demand: true,
        alias: 'b',
        default: 1
    },
    limite: {
        // demand: true,
        alias: 'l',
        default: 3
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear archivo de la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}