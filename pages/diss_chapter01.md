---
title: "Chapter 1, Some Random Title"
layout: chapter
permalink: "/dissertation/1/"
chapterno: 1
---

<div class="toggle-buttons">
<button class="toggle-button active" onclick="toggleOpacity('partial')">Partial</button>
<button class="toggle-button" onclick="toggleOpacity('opaque')">Opaque</button>
<button class="toggle-button" onclick="toggleOpacity('non-opaque')">Non-Opaque</button>
</div>

{% assign listofsections = site.dissertation | where: 'chapter', page.chapterno | sort: "section" %}
{% for chapterinfo in listofsections %}
<h3><a name="{{ page.chapterno }}.{{ chapterinfo.section }}.{{ chapterinfo.subsection }}"></a>{{ chapterinfo.chapterdisplay }}.{{ chapterinfo.sectiondisplay }}.{{ chapterinfo.subsectiondisplay }}: {{ chapterinfo.title }}</h3>
<p>{{ chapterinfo.content }}
{% endfor %}

<script>
	const DefCorpus = document.getElementById("definition-corpus");
    const popup = document.createElement("div");
    popup.classList.add("popup-corpus");
    popup.innerText = "Corpus here refers to the creation of a collection of written texts which are used for quantitative analysis. Most commonly, corpuses are constructed for computational linguistic studies, but are also used by digital humanists interested in textual analysis.";
    
    // Attach the tooltip to a specific fixed position on the page
    const tooltipOffsetX = 10; // Adjust the X offset (horizontal distance from the wordTooltip element)
    const tooltipOffsetY = -16; // Adjust the Y offset (vertical distance from the wordTooltip element)
    
      // Append the tooltip to the body element
    document.body.appendChild(popup);

    // Hide the tooltip initially
    popup.style.display = "none";
   
    // Add a mouseover event listener to the wordTooltip element
    DefCorpus.addEventListener("mouseover", () => {
        popup.style.display = "block";
    });

    // Add a mouseout event listener to the wordTooltip element
    DefCorpus.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });
    
    const DefClinicVis = document.getElementById("definition-clinicvis");
    popup.classList.add("popup-clinicvis");
    popup.innerText = "The clinical gaze refers to the ways doctors will objectify their patients by focusing on supposedly aberrant symptoms and their relationship to an idealized “normal” human body.";
    
    // Position the tooltip at a fixed location relative to the wordTooltip element
    popup.style.position = "absolute";
    popup.style.top = `${DefClinicVis.offsetTop + tooltipOffsetY}px`;
    popup.style.left = `${DefClinicVis.offsetLeft + tooltipOffsetX}px`;
    
    // Add a mouseover event listener to the wordTooltip element
    DefClinicVis.addEventListener("mouseover", () => {
        popup.style.display = "block";
    });

    // Add a mouseout event listener to the wordTooltip element
    DefClinicVis.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });
    
    const DefInterdisc = document.getElementById("definition-interdisc");
    popup.classList.add("popup-interdisc");
    popup.innerText = "I use interdisciplinary to describe a conversation with and adoption of different methods practiced by a range of academic fields.";
    
     // Position the tooltip at a fixed location relative to the wordTooltip element
    popup.style.position = "absolute";
    popup.style.top = `${DefInterdisc.offsetTop + tooltipOffsetY}px`;
    popup.style.left = `${DefInterdisc.offsetLeft + tooltipOffsetX}px`;
    
	// Add a mouseover event listener to the wordTooltip element
    DefInterdisc.addEventListener("mouseover", () => {
        popup.style.display = "block";
    });

    // Add a mouseout event listener to the wordTooltip element
    DefInterdisc.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });
    
    const DefActor = document.getElementById("definition-actor");
    popup.classList.add("popup-actor");
    popup.innerText = "While I am using the term actor, I am not explicitly pointing toward its use in non-hierarchical posthuman approaches to culture. Actor means, in this study, almost exclusively human beings and human run institutions.";
    
    // Position the tooltip at a fixed location relative to the wordTooltip element
    popup.style.position = "absolute";
    popup.style.top = `${DefActor.offsetTop + tooltipOffsetY}px`;
    popup.style.left = `${DefActor.offsetLeft + tooltipOffsetX}px`;
    
    // Add a mouseover event listener to the wordTooltip element
    DefActor.addEventListener("mouseover", () => {
        popup.style.display = "block";
    });

    // Add a mouseout event listener to the wordTooltip element
    DefActor.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });
    
    const DefPower = document.getElementById("definition-power");
    popup.classList.add("popup-power");
    popup.innerText = "Power, for Foucault, refers to the knowledge systems which create cultural understandings of objects and practices. These systems define objects in particular ways, which produce effects in the lived lives of subjects.";
    
    // Position the tooltip at a fixed location relative to the wordTooltip element
    popup.style.position = "absolute";
    popup.style.top = `${DefPower.offsetTop + tooltipOffsetY}px`;
    popup.style.left = `${DefPower.offsetLeft + tooltipOffsetX}px`;
    
    // Add a mouseover event listener to the wordTooltip element
    DefPower.addEventListener("mouseover", () => {
        popup.style.display = "block";
    });

    // Add a mouseout event listener to the wordTooltip element
    DefPower.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });
	
</script>