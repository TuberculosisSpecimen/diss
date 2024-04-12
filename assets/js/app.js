$(document).foundation()

// shows and hides filtered items
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

// Function to show elements based on class
function showElements(className) {
const elements = document.querySelectorAll('.' + className);
elements.forEach(element => {
  element.style.display = 'block';
});
}

// Function to hide elements based on class
function hideElements(className) {
const elements = document.querySelectorAll('.' + className);
elements.forEach(element => {
  element.style.display = 'none';
});
}

// Function to apply text styling
function applyTextStyling(opaque, transparent, partiallyOpaque) {
const opaqueSpans = document.querySelectorAll('.opaque-lines');
const partialSpans = document.querySelectorAll('.partial-lines');

opaqueSpans.forEach(span => {
  span.style.backgroundColor = opaque ? 'black' : 'transparent';
  span.style.color = opaque ? 'black' : 'inherit';
});

partialSpans.forEach(span => {
  span.style.textDecoration = partiallyOpaque ? 'line-through' : 'none';
});
}

// Event listeners for image buttons
document.getElementById('opaqueBtn').addEventListener('click', function() {
showElements('opaque');
hideElements(['transparent', 'partially-opaque']);
applyTextStyling(true, false, false);
});

document.getElementById('transparentBtn').addEventListener('click', function() {
showElements('transparent');
hideElements(['opaque', 'partially-opaque']);
applyTextStyling(false, true, false);
});

document.getElementById('partiallyOpaqueBtn').addEventListener('click', function() {
showElements('partially-opaque');
hideElements(['opaque', 'transparent']);
applyTextStyling(false, false, true);
});

// Function to keep toggle button selected until user chooses a new state
const toggleButtons = document.querySelectorAll('.toggle-button');

// Add click event listener to each toggle button
toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove 'selected' class from all buttons
    toggleButtons.forEach(btn => {
      btn.classList.remove('selected');
    });
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
  });
});
