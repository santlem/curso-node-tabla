//process.argv;
const { crearArchivo } = require('./helper/multiplicar');
const argv = require('./config/yargs');

const {b, l, h} = argv;

crearArchivo(b, l, h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));
