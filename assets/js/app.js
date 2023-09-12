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

const wordTooltip = document.getElementById("word-tooltip");
const popup = document.createElement("div");
popup.classList.add("popup");
popup.innerText = "Corpus refers to a large collection of texts that have been collected for statistical analysis. It is used regularly in the fields of computational linguistics and the digital humanities.";

wordTooltip.addEventListener("mouseover", () => {
	document.body.appendChild(popup);
	const rect = wordTooltip.getBoundingClientRect();
	popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
	popup.style.left = `${rect.left}px`;
	popup.style.display = "block";
});

wordTooltip.addEventListener("mouseout", () => {
	popup.style.display = "none";
	popup.remove();
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
