$(document).ready(function() {


	$("#submit").click(function() {

		// Get value of each field, store in local variable

		$fields = 
			[$('[name="price"]'),
			 $('[name="downPayment"]'),
			 $('[name="yearsOfLoan"]'),
			 $('[name="rate"]')];

		// check to see if the variable is not zero length
		$isValidInput = true;

		$fields.forEach(function(field) {

			$floatValue = parseFloat(field.val());

			if (isNaN($floatValue) ) {

			// for each var that is NaN, highlight the field
				field.css('background-color','red');
				$isValidInput = false;

			} else {
				field.css('background-color', 'white');
			}

		});

		// If field is zero or NaN
		if ($isValidInput == false) {
				$('.error').append('Please enter valid numbers and fill in all fields').css('color','red');
		} else {

		// If all is well, run the computation
			$price = parseFloat($fields[0].val());
			$downPayment = parseFloat($fields[1].val());
			$yearsOfLoan = parseFloat($fields[2].val());
			$rate = parseFloat($fields[3].val());

			$principal = $price - $downPayment;
			$interest = $principal * $rate;
			$totalPayment = $principal + $interest;
			$monthsOfLoan = $yearsOfLoan * 12;

			$monthlyPayment = $totalPayment / $monthsOfLoan;

			$('#payment').html($monthlyPayment);

		}


	});


});