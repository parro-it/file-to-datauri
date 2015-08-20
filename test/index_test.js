let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const datauri = require(moduleRoot);
const txt = `${__dirname}/fixture/test.txt`;
const html = `${__dirname}/fixture/test.html`;

describe('fileToDatauri', () => {
  it('works with promise ', async () => {
    const result = await datauri(txt);
    result.should.be.equal('data:text/plain;charset=utf-8;base64,dGhpcyBpcyBhIHRlc3QK');
  });

  it('set mime by extension', async () => {
    const result = await datauri(html);
    result.should.be.equal('data:text/html;charset=utf-8;base64,dGhpcyBpcyBhIHRlc3QK');
  });

  it('works sync', () => {
    const result = datauri.sync(txt);
    result.should.be.equal('data:text/plain;charset=utf-8;base64,dGhpcyBpcyBhIHRlc3QK');
  });

  it('works with callbacks', done => {
    datauri(txt, (err, result) => {
      if (err) {
        return done(err);
      }
      result.should.be.equal('data:text/plain;charset=utf-8;base64,dGhpcyBpcyBhIHRlc3QK');
      done();
    });
  });
});

