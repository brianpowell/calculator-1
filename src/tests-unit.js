
var expect = chai.expect;

expect('test').to.be.a('string');

describe("compute", function() {
  it("is a function", function() {
    expect(compute).to.be.a('function');
  });
});