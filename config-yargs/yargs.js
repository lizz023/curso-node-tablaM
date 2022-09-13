const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias:'base',
        type: 'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        default: 10,
        describe: 'Número hasta donde se quiere la tabla'
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        demandOption:true,
        default: false,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if(isNaN( argv.base ) ){
            throw 'la base tiene que ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;