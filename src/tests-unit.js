
var expect = chai.expect;


describe("compute() Function", function() {
  it("is a function", function() {
    expect(compute).to.be.a('function');
  });

  it("accepts valid input for eval()", function() {
  	var data = compute("3+4");
    expect(data).to.equal(7);
    clear();
  });

  it("catches invalid input for eval()", function() {
  	var data = compute("3+4)(");
    expect(data).to.equal('Error');
    clear();
  });
});

describe("Button Clicks", function() {
  it("We can click 0", function() {
  	clear();
  	$("#b0").click();
    expect($('#display').val()).equals('0');
  });

  it("We can click 1", function() {
  	clear();
  	$("#b1").click();
    expect($('#display').val()).equals('1');
  });

  it("We can click 2", function() {
  	clear(); 	
  	$("#b2").click();
    expect($('#display').val()).equals('2');
  });

  it("We can click 3", function() {
  	clear();
  	$("#b3").click();
    expect($('#display').val()).equals('3');
  });

  it("We can click 4", function() {
  	clear();
  	$("#b4").click();
    expect($('#display').val()).equals('4');
  });

  it("We can click 5", function() {
  	clear();
  	$("#b5").click();
    expect($('#display').val()).equals('5');
  });

  it("We can click 6", function() {
  	clear();
  	$("#b6").click();
    expect($('#display').val()).equals('6');
  });

  it("We can click 7", function() {
  	clear();
  	$("#b7").click();
    expect($('#display').val()).equals('7');
  });

  it("We can click 8", function() {
  	clear();
  	$("#b8").click();
    expect($('#display').val()).equals('8');
  });

  it("We can click 9", function() {
  	clear();
  	$("#b9").click();
    expect($('#display').val()).equals('9');
  });

  it("We can click )", function() {
  	clear();
  	$("#bpr").click();
    expect($('#display').val()).equals(')');
  });

  it("We can click (", function() {
  	clear();
  	$("#bpl").click();
    expect($('#display').val()).equals('(');
  });

  it("We can click .", function() {
  	clear();
  	$("#bpoint").click();
    expect($('#display').val()).equals('.');
  });

  it("We can click +", function() {
  	clear();
  	$("#bplus").click();
    expect($('#display').val()).equals('+');
  });

  it("We can click -", function() {
  	clear();
  	$("#bminus").click();
    expect($('#display').val()).equals('-');
  });

  it("We can click *", function() {
  	clear();
  	$("#bmultiply").click();
    expect($('#display').val()).equals('*');
  });

  it("We can click /", function() {
  	clear();
  	$("#bdivide").click();
    expect($('#display').val()).equals('/');
  });

  it("We can click Delete", function() {
  	clear();
  	$('#display').val("1234");
  	$("#bdelete").click();
    expect($('#display').val()).equals('123');
  });

  it("We can click =", function() {
  	clear();
  	$('#display').val("3+4");
  	$("#bequals").click();
    expect($('#display').val()).equals('7');
    clear();
  });

  it("We can click Clear", function() {
  	clear();
  	$('#display').val("3312142312341234");
  	$("#bclear").click();
    expect($('#display').val()).equals('');
    clear();
  });
});