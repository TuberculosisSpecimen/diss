---
layout: post
title: Object Lesson 2- A Neurology Lab’s Collections
excerpt: This sample blog post explores community archiving and links to a few example community-archive sites
author: sagar-prabhu
pullquote: "Find out more about community archiving!"
---

<br>
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
        max-width: 260px; /* Set the maximum width for the popup */
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
        display: inline-flex;
        gap: 20px;
        padding: 10px;
        background-color: grey;
        border-radius: 5px;
        justify-content: center; /* Center the buttons within the container */
        margin: 0 auto;
    }
    /* .toggle-button {
        padding: 8px 12px;
        background-color: #f1f1f1;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .toggle-button.active {
        background-color: #007bff; /* Change to your preferred active button color */
        /* color: white;
    }  */

    .toggle-button {

      background-color: #4c4843;
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 10px;
      cursor: pointer;
      border-radius: 4px;
      width: 150px;

    }
    /* Button styles for hover state */

    .toggle-button:hover {
      background-color: #252422;
    }

    /* Button styles for active state */

    .toggle-button.active {
      background-color: #eb5e28;
      /* color: #252422; */

    }


</style>

<div class="toggle-buttons">
<button class="toggle-button" onclick="toggleOpacity('opaque')" data-mode="opaque">Opaque</button>
<button class="toggle-button" onclick="toggleOpacity('non-opaque')" data-mode="non-opaque">Non-Opaque</button>
</div>

<img id="HenryReport" src="{{ site.baseurl }}/assets/img/ReportoftheHenryPhippsIns3_1905-1906158_Resize_Partial.jpg" alt="ReportoftheHenryPhippsIns3" width="1200" height="600">


Figure 1. A picture of the Henry Phipps Institute’s Neurology Lab. From the Third Annual Report of the Henry Phipps Institute,
1905-1906.
<hr>
<br>
In the decades following Koch’s influential 1882 essay, Die Aetiologie der Tuberkuose, American tuberculosis research made large strides profesionally and culturally. This period also saw the rise of American medical schools, these medical school’s centralization and professionalization during the late nineteenth and early twentieth century, the rapid industrialization of American cities, and the aftermath of World War I. These larger societal scale, and discipline scale shifts were underpinned by the work of scientists like <span class="opaque-lines">Edward L. Trudeau and the <span class="partial-lines">doctors at his Saranac Lake Sanatorium</span> (at one time known as the Adirondack Cottage Sanatorium) in upstate New York and Karl Von Ruck in Asheville, North Carolina.</span> This period saw a shift in approaches to tuberculosis, driven by the slow adoption of germ theory conceptions of the disease, the shift of health resorts to <span id="word-tooltip">**sanatoria**</span>---a more specialized tuberculosis institution---and the public health intervention by doctors, cities, and states (1.2.1).

In addition to these larger scale shifts, a number of research centered care centers began treating patients and reporting their findings in the scientific literature. <span class="opaque-lines">The most influential of these institutions was Trudeau’s Adirondack Cottage Sanatorium. <span class="partial-lines">Opening in 1885, Trudeau’s sanatorium was modeled after his own experience seeking the healing airs of upstate New York,</span> after he became sick with tuberculosis at a young age.</span> The doctor cited the shift out of New York City, and the embrace of a more rugged lifestyle as being crucial in his recovery. <span class="opaque-lines">In the years following its opening, the Saranac Lake Sanatorium would <span class="partial-lines">both treat and study the patients that came under its care.</span> Trudeau and his sanatorium became a key aspirational figure in the study and treatment of tuberculosis, inasmuch as the cultural an scientific work engaged by the sanatorium (1.2.1).</span>

These institutions which mixed research and care were relatively uncommon, but their imprint on the tuberculosis corpus (x.2.0) was substantial. The most successful research came from these mixed-use institutions, with Trudeau and [OTHER Scientists at SARANAC] displaying a model for research. Between the founding of Trudeau’s sanatorium in 1885 and the end of the roaring twenties, America would have developed a robest scientific community studying the disease, resulting in a number of conferences, symposia, professional organiziations, and the publishing of the journal, The American Review of Tuberculosis.

In this growing national research environment, Henry Phipps, a guilded age baron closely associated with Andrew Carneigie, made a million dollar donation to <span class="opaque-lines">found a tuberculosis research center in the heart of Philadelphia run by <span class="partial-lines">Lawrence F. Flick.</span> Flick was a prominent figure already, having spent the past twenty years in private practice, specializing in tuberculosis care before opening his own sanatorium, the SOMETHING sanatorium. Phipps’ eponymous institute was the first of its kind to be both a charity hospital and research institute specializing in tuberculosis.</span>

Chapter 4 will look more closely at the Phipps Institute (4.0.1), for this section, I want to focus instead on the image supplied above (fig. 1). This image is not a specimen in the sense of Koch’s specimens, so much as a photograph of a neurological lab, that just so happens to depict specimens in addition to the space. For this section, I will focus on the foreground of the image, to what appears to be about two dozen wet tissue specimens preserved in jars (fig. 2). The importance of these objects is linked to the epistemic and ideological value which is purported to be held within these human remains, and to the work of Andreas Vesalius and other medical scientists in the early modern period.

<br>
<img id="henrydetail" src="{{ site.baseurl }}/assets/img/ReportoftheHenryPhippsIns3_1905-1906158_Resize_Partial.jpg"">

Figure 2. That’s a lot of brains. From the Third Annual Report of the Henry Phipps Institute. 1905-1906.
<hr>

<script>
    const wordTooltip = document.getElementById("word-tooltip");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "'Sanatoria','The sanatorium, sometimes called sanitarium or sanitorium, was a specialized institution where patients were able to be treated for a specific disease.";

    // Attach the tooltip to a specific fixed position on the page
    const tooltipOffsetX = 10; // Adjust the X offset (horizontal distance from the wordTooltip element)
    const tooltipOffsetY = -16; // Adjust the Y offset (vertical distance from the wordTooltip element)

    // Position the tooltip at a fixed location relative to the wordTooltip element
    popup.style.position = "absolute";
    popup.style.top = `${wordTooltip.offsetTop + tooltipOffsetY}px`;
    popup.style.left = `${wordTooltip.offsetLeft + tooltipOffsetX}px`;

    // Append the tooltip to the body element
    document.body.appendChild(popup);

    // Hide the tooltip initially
    popup.style.display = "none";

    // Add a mouseover event listener to the wordTooltip element
    wordTooltip.addEventListener("mouseover", () => {
        popup.style.display = "block";
    });

    // Add a mouseout event listener to the wordTooltip element
    wordTooltip.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });

    // wordTooltip.addEventListener("mouseover", () => {
    //     document.body.appendChild(popup);
    //     const rect = wordTooltip.getBoundingClientRect();
    //     // popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
    //     // popup.style.left = `${rect.left}px`;
    //     // popup.style.display = "block";
    //     const tooltipOffsetX = 10; // Adjust the X offset (horizontal distance from the word)
    //     const tooltipOffsetY = -80; // Adjust the Y offset (vertical distance from the word)
    //     popup.style.top = `${rect.top + tooltipOffsetY}px`; // Adjust positioning relative to the word
    //     popup.style.left = `${rect.left + tooltipOffsetX}px`;
    //     popup.style.display = "block";
    // });

    // wordTooltip.addEventListener("mouseout", () => {
    //     popup.style.display = "none";
    //     popup.remove();
    // });

    function toggleOpacity(mode) {
        const opaqueLines = document.querySelectorAll('.opaque-lines');
        const HenryReport = document.getElementById('HenryReport');
        const henrydetail = document.getElementById('henrydetail');

        // Remove the "active" class from all buttons
        const buttons = document.querySelectorAll('.toggle-button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        if (mode === 'opaque') {
            // Toggle opaque lines
            opaqueLines.forEach(line => {
                line.style.backgroundColor = '#000000'; // Set background color to black
                HenryReport.src = "{{ site.baseurl }}/assets/img/ReportoftheHenryPhippsIns3_1905-1906158_Full.jpg";
                henrydetail.src = "{{ site.baseurl }}/assets/img/ReportoftheHenryPhippsIns3_1905-1906158_Resize_Full.jpg";
            });
            // Ensure partial lines are fully visible
            partialLines.forEach(line => {
                line.style.opacity = '1';
                line.style.backgroundColor = ''
            });
        }
        else if (mode === 'non-opaque'){
        	HenryReport.src = "{{ site.baseurl }}/assets/img/ReportoftheHenryPhippsIns3_1905-1906158_Partial.jpg";
            henrydetail.src = "{{ site.baseurl }}/assets/img/ReportoftheHenryPhippsIns3_1905-1906158_Resize_Partial.jpg";
            partialLines.forEach(line => {
                line.style.opacity = '1';
                line.style.backgroundColor = ''
            });
            opaqueLines.forEach(line => {
                line.style.opacity = '1';
                line.style.backgroundColor = ''
            });
        }

        // Add the "active" class to the clicked button
        const activeButton = document.querySelector(`button[data-mode="${mode}"]`);
        activeButton.classList.add('active');
        
    }

</script>

