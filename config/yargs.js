const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta qué número multiplicar'
    })
    .check( ({b,h}, options) => {
        if(isNaN(b)){
            throw 'La base tiene que ser un número';
        }
        if(isNaN(h)){
            throw 'Hasta tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;