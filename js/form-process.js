$(document).ready(function() {

	function isNum(value) {
		return /^\d*\.*\d+$/.test(value);
	}

	$("#submit").click(function() {

		// Get value of each field, store in local variable

		$fields = 
			[$('[name="price"]'),
			 $('[name="downPayment"]'),
			 $('[name="yearsOfLoan"]'),
			 $('[name="rate"]')];

		// check to see if the variable is not zero length
		var isValidInput = true;

		$fields.forEach(function(field) {

			var floatValue = parseFloat(field.val());

			if (isNaN(floatValue)	|| !isNum(field.val())) {

			// for each var that is NaN, highlight the field
				field.css('background-color','red');
				isValidInput = false;

			} else {
				field.css('background-color', 'white');
			}

		});

		// If field is zero or NaN
		if (isValidInput == false) {

			$('.error').html('Please enter valid numbers and fill in all fields').css('color','red');

		} else {

			$('.error').empty();
		// If all is well, run the computation
			var price = parseFloat($fields[0].val());
			var downPayment = parseFloat($fields[1].val());
			var yearsOfLoan = parseFloat($fields[2].val());
			var rate = parseFloat($fields[3].val());

			var principal = price - downPayment;
			var interest = principal * rate;
			var totalPayment = principal + interest;
			var monthsOfLoan = yearsOfLoan * 12;

			var monthlyPayment = totalPayment / monthsOfLoan;

			$('#payment').html(monthlyPayment.toFixed(2));

		}


	});


});