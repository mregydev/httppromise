const { get, request } = require('./index');

const assert = require('assert');


describe("get test case", () => {
  it('should get url information with get', (done) => {
    TestGet(done);
  });

  it('should get url information with request', (done) => {
    TestRequest(done);
  });
});




async function TestRequest(done) {

  const options = {
  hostname: 'www.google.com',
  method: 'GET'
};

  let result = await request(options);

  let res = "";

  return new Promise((resolve, reject) => {
    result.on('data', function (data) {
      
      res += data.toString();
    });

    result.on('end', () => {
      assert.ok(res);
      done();
    });
  });
}





async function TestGet(done) {
  let result = await get('http://www.google.com');

  let res = "";

  return new Promise((resolve, reject) => {
    result.on('data', function (data) {
      res += data.toString();
    });

    result.on('end', () => {
      assert.ok(res);
      done();
    });
  });
}
