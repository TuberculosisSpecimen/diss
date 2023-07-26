---
layout: post
title: Object Lesson 3 The Patient's Body
excerpt: This sample blog post explores community archiving and links to a few example community-archive sites
author: sagar-prabhu
pullquote: "Find out more about community archiving!"
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

<img id="CroftonImg" src="{{ site.baseurl }}/assets/items/Crofton_PulmonaryTuberculosisItsD_1917_36.jpg" alt="Crofton_PulmonaryTuberculosisItsD_1917_36.jpg" style="max-width:100%;height:auto;">

Figure 1

## 0.4.1 Object Lesson Three: The Patient's Body ##

To produce my arguments, I compiled a <span id="word-tooltip">corpus</span> of a little more than 700 texts. I have done a number of analyses on this corpus, as well as using the coding process as a means to become familiar with general trends in the history of tuberculosis (x.2.0). <span class="opaque-lines">I use this corpus to make arguments regarding <span class="partial-lines">medicine's history,</span> and the first two chapters (1.1.1; 2.1.1) rely heavily on images like this one to make arguments about medicine's visual culture (1.1.2).</span> The object displayed above (fig. 1), comes from a publication in the corpus, and was one of the more striking images I came across when organizing the \[however thousand images\] which were drawn from the collection.

This section is less interested in the image itself, and much more about the methodological and theoretical approaches I am bringing to this corpus. This image will serve as an entry point to my approach to methods popularized in the digital humanities and which straddle different disciplines. I adopt methods such as content analysis with a 'productive unease', to borrow Julia Flanders' term, to make use of them in a singular (perhaps methodologically impure) way. Paraphrasing Tara McPherson, sitting between disciplines and working with the digital creates possibilities for critique and novel interventions. I have gone into detail as to my methods in the appendix (x.1.0; x.2.0), and so this section will instead focus on some theoretical ideas which scaffold my thinking.

Returning to the concept of *capta*---or a way of thinking of quantitative research objects as a product of extractive practices (0.3.3)---my analysis of the corpus and its two major outputs---the analysis of its images (1.0.1; 2.0.1), and the analysis of the text (4.0.1)---depends on a critical (but imperfect) engagement with the objects extracted by medical scientists. These objects do not sit and moulder on the shelf, but also find themselves entangled and recaptured by various modes of mediation: the initial theft brings a specimen into a disciplinary apparatus (0.3.2), which may be copied, rejected, remixed or otherwise made useful for another researcher (0.4.3; 0.5.2), be they another tuberculosis scholar at the beginning of the twentieth century, the digital archivists who scanned and maintain the objects on HathiTrust,  or the PhD candidate who has taken advantage of any transformation of the object and included it into this digital dissertation. What is <span id="inscription-tooltip">inscribed</span> on a specimen and its reproductions and preservations is a mess of indexes: from the scientific purpose of that object, to the way it is made to represent an argument, to the embodied, lived self of the subject from which it was stolen.

To make my point, I turn to the object lesson at the top of this section: this image (fig. 1) depicts the kinds of coersive, reciprocal, and discursievly useful ways in which a specimen has been leveraged for research. Importantly, this image is not just the reproduction, but a scan of the reproduction which has been uploaded to a server, which was then downloaded, copied again, ingested into a photo editing program (Photoshop), exported in a more web friendly format, and then reuploaded to another server to be viewed by the reader. The transmission of aura would make Walter Benjamin blush.

While this is a specimen (0.2.3), it is also something that is engrained in a whole system of knowledge production and capital that has seen it valuable enough to maintain and reproduce. Its value for medical epistemics is only part of why it is valuable. In this process the object in question has been written and rewritten, turned from a body, to an index of light, to an index of that index, to a set of bits and so on. My interest in this object is both its use as a discursive specimen, but also its various continuity before and after light was exposed to a sensitive chemical, and before and after that image was reproduce in a book. Thinking of the specimen in this entangled, networked way helps contradict the various black boxes which blur dominant ideologies within the sciences. The specimen helps open this black box. It helps bring into the foreground the inscribed objects which represent the real, and bring into focus the extractive practices on which those epistemics depend.

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

</script>
