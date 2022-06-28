process.env.NODE_ENV = 'test';

const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');

const server = require('../src/server');
const noPageMessage = 'There is nothing here';

chai.use(chaiHttp);

const test = async (pathname = '') => chai.request(server).get(`/${pathname}`);

describe('[REST][INFO] Endpoints list', () => {
  it('should GET a list of endpoints', async () => {
    const { body } = await test();

    expect(body).to.be.an('object');
    /* expect(body).to.equal({'alion-api': '1.0.0'}) */
  });
});

describe('[REST][USERS] Endpoints Users list', () => {
  it('should GET a list of Users', async () => {
    const { body } = await test('users');

    expect(body).to.be.an('array');
  });
});

describe('[REST] API 404', () => {
  it('should get an error message', async () => {
    const res = await test('wubbalubbadubdub');

    expect(res).to.have.status(404);
    /* expect(res.body).to.have.equal(noPageMessage); */
  });
});
