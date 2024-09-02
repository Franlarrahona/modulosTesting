import * as chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;

const requester = supertest('http://localhost:8080');
const testUser = {first_name: 'pedro', last_name: 'perez', email:'pedro.perez@hotmail.com', password: '1234'};

describe('test integracion del carrito de compras', function(){
    it('GET /api/carts/ debe mostrar los diferentes carritos', async function() {
        const {_body} = await requester.get('/api/carts');

        expect(_body.error).to.be.undefined;
        expect(_body.payload).to.be.ok
    })
    it('DELETE /api/carts/cid/products debe eliminar el carrito seleccionado envase a su id', async function(){
        const{_body} = await requester.get('/api/carts/665df710bd11eab4d696de60/products')
        
        expect(_body.error).to.be.undefined;
        expect(_body.payload).to.be.ok
    } )
})