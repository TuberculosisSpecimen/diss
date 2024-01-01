---
layout: post
title: "Testing for mouseover, for Kalani"
excerpt: "We are working on getting the mouseover CSS to work for the site."
pullquote: ""We are working on getting the mouseover CSS to work for the site."
---

<style>
    .popup {
        display: none;
        position: absolute;
        background-color: white;
        color: black;
        padding: 5px;
        border-radius: 5px;
        border-color: black;
        border-style: solid; 
        border-width: 1px; /* Added border-width */
        z-index: 9999;
        max-width: 220px; /* Set the maximum width for the popup */
        font-size: 15px; /* Added text size */
        font-style: oblique; /* Added text style */
    }

    /* Style for the word "influential" when hovered */
    #word-tooltip:hover {
        text-decoration: underline;
        color: blue; /* Change the color to your preferred hover color */
    }

    .opaque-lines {
        opacity: 1; /* Set initial opacity for partial view */
    }

    .toggle-buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
    .toggle-button {
        padding: 8px 12px;
        background-color: #f1f1f1;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .toggle-button.active {
        background-color: #007bff; /* Change to your preferred active button color */
        color: white;
    }

</style>

<div class="toggle-buttons">
<button class="toggle-button active" onclick="toggleOpacity('partial')">Partial</button>
<button class="toggle-button" onclick="toggleOpacity('opaque')">Opaque</button>
<button class="toggle-button" onclick="toggleOpacity('non-opaque')">Non-Opaque</button>
</div>
^Sagar's Buttons

<div class="toggle-buttons">
<button id="opaqueBtn" class="toggle-button">Opaque</button>
<button id="transparentBtn" class="toggle-button">Transparent</button>
<button id="partiallyOpaqueBtn" class="toggle-button">Partially Opaque</button></div>
^Kalani's Buttons

Hi Kalani!

I don't have a good piece of text for doing the opacity over text, so this is a stand-in for you to test.

This is a comment about tuberculosis' doctors. This is a comment about a patient and how they were treated. I want to describe a specific case here: <span class="opaque-lines"><span class="partial-lines">John Doe suffered after being treated with artificial pneumothorax.</span></span> Many patients were treated with this method, which involved piping nitrogen into the lung to cause a partial collapse of the cavity. The Henry Phipps institute treated <span class="opaque-lines">over a hundred patients</span> in this way. Lawrence F. Flick once said "those poors".

<span class="opaque-lines"><span class="partial-lines">This is a comment that involves sensitive information of a patient to be described.</span></span>

<span class="opaque-lines">This is a comment that involves general information about a range of patients at a single center.</span>

This is a comment about Lawrence F. Flick, a doctor. <span class="opaque-lines"><span class="partial-lines">He treated Jane Doe on January 1, 1900 with a lot of opium.</span></span>

I disagree with these ideas. Flick was obviously out of his gourd.

<script>
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
        const ChicagoPathology = document.getElementById('ChicagoPathology');

        if (mode === 'partial') {
            // Toggle partial lines
            partialLines.forEach(line => {
                line.style.backgroundColor = '#000000'; // Set background color to black
                ChicagoPathology.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub5-_1925-26_520_partial.jpg";
                CroftonFigure.src = "{{ site.baseurl }}/assets/items/Crofton_PulmonaryTuberculosisItsD_1917_36_OP_partial.jpg";
                BushnellSpecimen.src = "{{ site.baseurl }}/assets/items/TheAmericanReviewofTuberc2_1918-1919_193_partial.jpg";
            });
            // Ensure opaque lines are fully visible
            opaqueLines.forEach(line => {
                line.style.opacity = '1';
            });

            
        } else if (mode === 'opaque') {
            // Toggle opaque lines
            opaqueLines.forEach(line => {
                line.style.backgroundColor = '#000000'; // Set background color to black
                ChicagoPathology.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub5-_1925-26_520_full.jpg";
                CroftonFigure.src = "{{ site.baseurl }}/assets/items/Crofton_PulmonaryTuberculosisItsD_1917_36_OP_full.jpg";
                BushnellSpecimen.src = "{{ site.baseurl }}/assets/items/TheAmericanReviewofTuberc2_1918-1919_193_full.jpg";
            });
            // Ensure partial lines are fully visible
            partialLines.forEach(line => {
                line.style.opacity = '1';
            });
        }
        else if (mode === 'non-opaque'){
            ChicagoPathology.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub5-_1925-26_520.jpg";
            CroftonFigure.src = "{{ site.baseurl }}/assets/items/Crofton_PulmonaryTuberculosisItsD_1917_36.jpg";
            BushnellSpecimen.src = "{{ site.baseurl }}/assets/items/TheAmericanReviewofTuberc2_1918-1919_193.jpg";
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

</script>
