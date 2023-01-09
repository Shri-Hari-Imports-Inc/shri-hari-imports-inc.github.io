var ready;
ready = function() {

	// Top scroll button
	$().UItoTop({ easingType: 'easeOutQuart' });
	
	// Checkout page billing address toggle
	if ( $('#same_billing').length ) {
		if ($('#same_billing')[0].checked) {
			$(".billing").toggle();
		};
		$('#same_billing').click(function() {
			$(".billing").toggle(!this.checked);
		});
	};

	// Checkout page account creation toggle
	if ( $('#create_account_checkbox').length ) {
		$('#create_account_checkbox').click(function() {
			$('#create_account_table').toggle(this.checked);
		});
		if (!$('#create_account_checkbox')[0].checked) {
			$("#create_account_table").toggle(false);
		};
	}

};

$(document).ready(ready);
$(document).on('page:load', ready);
