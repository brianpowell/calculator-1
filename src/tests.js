
var tests = [ ["8", "plus", "6", "equals", "14" ],
			  ["8", "plus", "6", "equals", "15" ],
			  ["8", "multiply", "6", "equals", "48" ],
			  ["6", "divide", "8", "equals", "0.75" ],
			  ["8", "plus", "6", "plus", "6", "minus", "3", "equals", "17" ]
			]


function runTests() {

	var correct = 0;
	var incorrect = 0;
	var subs = {"plus":"+","minus":"-","divide":"/","multiply":"*","equals":"="}

	var template = function (arr, res) {

		var set = [];
		$.each(arr, function (i,v) {
			if(subs[v]) {
				set.push(subs[v]);
			} else {
				set.push(v);
			}
		});

		return "<div class='tests'><span class='"+res+"'>"+res+"</span> &nbsp;&nbsp; "+set.join(' ')+"  </div>";
	}

	$("#testresults").text('');

	var trip = false;
	var result = "correct";

	$.each(tests, function (i,v) {
		var vals = v;
		$.each(vals, function (ind,val) {
			if(trip) {
				if( $("#display").val() == val ) {
					result = "correct";
					correct++;
				} else {
					result = "wrong";
					incorrect++;
				}

				trip = false;
			} else {
				$("#b"+val.toLowerCase()).click();
				if(val.toLowerCase() == "equals") { trip = true; } 
				else { trip = false; }
			}
		});
		$("#bclear").click();
		$("#testresults").append(template(vals,result));
	});

	$("#testresults").append("<hr>&nbsp;&nbsp;<b>Total Tests: "+tests.length+"</b><hr>");
	$("#testresults").append(template([correct],'correct'));
	$("#testresults").append(template([incorrect],'wrong'));

}