
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//app criado

//app ouvindo requisições do navegador em porta 3333
app.listen(3333);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma inforção do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: parâmetros nomeados enviados na rota após o "?" (filtros, paginaçao)
  * Route Params: Parâmetros utilizados para identificar recursos(id)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */



//adicionando rota
// '/' significa rota raiz
// os parametros passados vem do express, requisisções e respostas.

