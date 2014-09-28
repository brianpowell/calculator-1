
var tests = [ ["8", "plus", "6", "equals", "14" ],
			  ["6", "minus", "7", "equals", "-1" ],
			  ["8", "multiply", "6", "equals", "48" ],
			  ["6", "divide", "8", "equals", "0.75" ],
			  ["8", "plus", "6", "plus", "6", "minus", "3", "equals", "17" ],
			  ["6","4", "divide", "8", "equals", "8" ],
			  ["1","0","0","0","0","0","0", "plus", "3", "multiply", "3", "equals", "1000009"],
			  ["1","0","0","0","0","0","0", "multiply", "1","0","0","0","0","0","0", "equals", "1000000000000" ],
			  ["8","1", "divide", "9", "equals", "9", "minus", "3", "minus", "3", "equals", "3" ],
			  ["3", "plus", "3", "plus", "3", "plus", "3", "plus", "3", "equals", "15" ],
			  ["2", "minus", "3", "minus", "4", "minus", "5", "minus", "6", "equals", "-16" ],
			  ["1", "multiply", "2", "multiply", "3", "multiply", "4", "multiply", "5", "equals", "120" ],
			  ["5", "divide", "4", "divide", "3", "divide", "2", "divide", "1", "equals", "0.20833333333333334" ],
			  ["1", "0", "0", "multiply", "0", "point", "2", "equals", "20"  ],
			  ["8", "0", "multiply", "0", "point", "5", "equals", "40"  ]
			]


function runTests() {

	var correct = 0;
	var incorrect = 0;
	var subs = {"plus":"+","minus":"-","divide":"/","multiply":"*","point":".","equals":"="}

	var template = function (arr, res, des) {

		var set = [];
		$.each(arr, function (i,v) {
			if(subs[v]) {
				set.push(subs[v]);
			} else {
				set.push(v);
			}
		});

		return "<div class='tests'><span class='"+res+"'>"+des+" "+res+"</span> &nbsp;&nbsp; "+set.join(' ')+"  </div>";
	}

	$("#testresults").text('');

	var trip = false;
	var result = "correct";

	$.each(tests, function (i,v) {
		$("#bclear").click();
		var vals = v;
		$.each(vals, function (ind,val) {
			if(trip) {
				if( $("#display").val() == val ) {
					result = "correct";
					if(ind == (v.length-1)) {
						correct++;
					}
				} else {
					result = "wrong (= "+$("#display").val()+")";
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
		$("#testresults").append(template(vals,result,"Test #"+(i+1)));
	});

	$("#testresults").append("<hr>&nbsp;&nbsp;<b>Total Tests: "+tests.length+"</b><hr>");
	$("#testresults").append(template([correct],'correct',''));
	$("#testresults").append(template([incorrect],'wrong',''));

}