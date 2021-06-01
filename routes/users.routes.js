const { Router } = require('express')
const router = Router()

const { getUsers } = require('../controllers/users')
/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    Response:
 *      example:
 *        codeResponse: 200
 *        data : {
 *          id: 1,
 *          name: string,
 *          lastName: string,
 *          email: string,
 *          status: boolean,
 *          hobbies: [
 *              string,
 *          ]
 *        }
 *            
 *
 */




/**
 * @swagger
 * /api/usuarios:
 *  get:
 *    summary: Obtiene todos los usuarios de la base de datos
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: the tasks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 *
 */
router.get('/', getUsers )


module.exports = router
