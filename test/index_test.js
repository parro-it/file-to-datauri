let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const fileToDatauri = require(moduleRoot);

describe('fileToDatauri', () => {
  it('works', async () => {
    const result = await fileToDatauri();
    result.should.be.equal(42);
  });
});

