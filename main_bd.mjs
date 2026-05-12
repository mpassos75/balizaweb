import  {openDB} from './mydados/config_bd.mjs';
import  {insertCondt} from './mydados/tab_condutor.mjs';
//const openDB = require('./config_bd.cjs');

//const  = require('./config_bd.js');
//import express from 'express';
import  path  from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';

import bodyParser from 'body-parser';

//const expressX = require('express');
//const path = require('path');
//const cors = require('cors');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename, 'balizaweb');

const app = express();
//const bodyParser = require('body-parser');

const port = process.env.PORT || 3100;

 console.log("Esse fliname"+__filename);
 console.log("Esse dirname"+__dirname);
 
 
//
 openDB();
//createtab_condutor();
insertCondt();


// Exemplo em Express
app.use(express.static('src')); // Onde 'public' é a pasta com seu CSS

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
//rota
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
console.log('Servidor Acionado!');

 response.sendFile(path.join(__dirname, 'index.html'));
//return response.send('Servidor Pesquisa Trânsito--OK!');
});
//rota usuarios
app.get('/users', (request, response) => {
console.log('Entrou Pag. Usuarios!');

return response.send('Página Usuários');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.post('/salvar', function(request, response){
 insertCondt(request.body.ncnh, request.body.tempo_cnh, request.body.inseg_est, 
  request.body.sit_dif, request.body.coment_motivo, request.body.info_tel, request.body.email); 

  

  response.json({ sucesso: true, "status": 200 })

});


app.listen(port, () => {
  console.log(`App listening on port: ${port}`);

});










