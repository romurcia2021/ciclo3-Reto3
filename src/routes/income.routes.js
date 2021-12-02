const express = require('express')
const router = express.Router()
const incomeController = require('../controllers/income.controller')
const Auth = require('../middlewares/authentication')
/** para escribir bloque de comentarios
* @api {get} / Get incomes
* @apiName  getincomes
* @apiGroup Incomes
* @apiDescription Listado de ingresos del usuario
* @apiSuccess {json} list lista de ingresos
* @apiSuccessExample {json} Success - Response 
* {
*  "_id": "6196fd852014777c84f1b3fd",
*    "createrAt": "2021-11-19T01:27:33.174Z",
*    "__v": 0
* }
 */

router.get('/',incomeController.list)
/** para escribir bloque de comentarios
* @api {post} / Add incomes
* @apiName  getincomes
* @apiGroup Incomes
* @apiDescription Agregar nuevo ingresos del usuario
* @apiParam {Number} Value valor del ingreso que se va a registrar
* @apiParam {String} description descripción del ingreso que se va a registrar
* @apiParamExample {json} Request-Example
* x-www-form
* @apiSuccess {json} income ingreso guardado
* @apiSuccessExample {json} Success - Response 
* HTTP/1.1 200 ok
*/
router.post('/', Auth,  incomeController.add)


module.exports = router 

