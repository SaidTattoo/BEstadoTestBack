const { getUsers } = require('../controllers/users')
const { createConnection }  = require('../database/database');
const supertest = require('supertest')
const app = require('../app')

let testServer;
beforeAll(() => {
    createConnection()
    testServer = app.listen(3000)
})

const api = supertest(app)

describe("GET /api/usuarios", () => {
    test("Users are returned as json" , async ()  => {
        await api
        .get('/api/usuarios')
        .expect('Content-Type', /text\/html/)
    })  
    test("There are one user", async () => {
        const response = await api.get('/api/usuarios')
        expect(response.body.data).toHaveLength(1)
    })
})

afterAll((done) => {
    testServer.close(done)
})