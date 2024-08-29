import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;

const requester = supertest('http://localhost:8080');
const testUser = {first_name: 'pedro', last_name: 'perez', email:'pedro.perez@hotmail.com', password: '1234'};
const testProduct = {id: '32', nombre: 'producto de prueba', categoria:' categoria de producto de prueba', precio: 99, descripcion:'descripcion de producto de prueba', stock:999}

describe('test integracion de productos', function() {

    it('GET /api/products/ debe traer los products', async function() {
        const { _body } = await requester.get('/api/products/');

        expect(_body.error).to.be.undefined;
        expect(_body.payload).to.be.ok;

    });

    it('POST /api/products/ debe cargar un nuevo producto a la bbdd', async function() {
        const {_body} = (await requester.post('/api/products/')).send(testProducts)
    })

});

