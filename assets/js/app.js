$(document).foundation()

// =================================
// Opacity Control for Redaction
// =================================

$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "all") {
    $('.filter-simple-item').show('1000');
  } else {
    $(".filter-simple-item").not('.'+value).hide('3000');
    $('.filter-simple-item').filter('.'+value).show('3000');
  }
});

// changes active class on filter buttons
$('.filter-simple-button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});

function toggleOpacity(mode) {
	const partialLines = document.querySelectorAll('.partial-lines');
	const opaqueLines = document.querySelectorAll('.opaque-lines');
	const CroftonImg = document.getElementById('CroftonImg');

	if (mode === 'partial') {
		// Toggle partial lines
		partialLines.forEach(line => {
			line.style.backgroundColor = '#000000'; // Set background color to black
			CroftonImg.src = "{{ site.baseurl }}/assets/items/Crofton_PulmonaryTuberculosisItsD_1917_36_OP_partial.jpg";
		});
		// Ensure opaque lines are fully visible
		opaqueLines.forEach(line => {
			line.style.opacity = '1';
		});

		
	} else if (mode === 'opaque') {
		// Toggle opaque lines
		opaqueLines.forEach(line => {
			line.style.backgroundColor = '#000000'; // Set background color to black
			CroftonImg.src = "{{ site.baseurl }}/assets/items/Crofton_PulmonaryTuberculosisItsD_1917_36_OP_full.jpg";
		});
		// Ensure partial lines are fully visible
		partialLines.forEach(line => {
			line.style.opacity = '1';
		});
	}
	else if (mode === 'non-opaque'){
		CroftonImg.src = "{{ site.baseurl }}/assets/items/Crofton_PulmonaryTuberculosisItsD_1917_36.jpg";
		partialLines.forEach(line => {
			line.style.opacity = '1';
			line.style.backgroundColor = ''
		});
		opaqueLines.forEach(line => {
			line.style.opacity = '1';
			line.style.backgroundColor = ''
		});
	}
}
