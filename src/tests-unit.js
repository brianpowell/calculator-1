
var expect = chai.expect;

expect('test').to.be.a('string');

describe("compute", function() {
  it("is a function", function() {
    expect(compute).to.be.a('function');
  });

  it("accepts input for eval()", function() {
  	var data = compute("3+4");
    expect(data).to.equal(7);
    clear();
  });
});


describe("Button Clicks", function() {
  it("We can click 0", function() {
  	$("#b0").click();
    expect($('#display').val()).equals(0);
  });
});