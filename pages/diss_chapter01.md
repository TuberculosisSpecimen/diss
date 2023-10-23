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
    popup.classList.add("popup");
    popup.innerText = "Corpus here refers to the creation of a collection of written texts which are used for quantitative analysis. Most commonly, corpuses are constructed for computational linguistic studies, but are also used by digital humanists interested in textual analysis.";

    DefCorpus.addEventListener("mouseover", () => {
        document.body.appendChild(popup);
        const rect = DefCorpus.getBoundingClientRect();
        popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
        popup.style.left = `${rect.left}px`;
        popup.style.display = "block";
    });
    
const DefClinicVis = document.getElementById("definition-clinicvis");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "The clinical gaze refers to the ways doctors will objectify their patients by focusing on supposedly aberrant symptoms and their relationship to an idealized “normal” human body.";

    DefClinicVis.addEventListener("mouseover", () => {
        document.body.appendChild(popup);
        const rect = DefCorpus.getBoundingClientRect();
        popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
        popup.style.left = `${rect.left}px`;
        popup.style.display = "block";
    });
    
    const DefInterdisc = document.getElementById("definition-interdisc");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "I use interdisciplinary to describe a conversation with and adoption of different methods practiced by a range of academic fields.";

    DefInterdisc.addEventListener("mouseover", () => {
        document.body.appendChild(popup);
        const rect = DefCorpus.getBoundingClientRect();
        popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
        popup.style.left = `${rect.left}px`;
        popup.style.display = "block";
    });
 	
 	const DefActor = document.getElementById("definition-actor");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "While I am using actor, I am not explicitly pointing toward its use in non-hierarchical posthuman approaches to culture. Actor means, in this study, almost exclusively human beings.";

    DefActor.addEventListener("mouseover", () => {
        document.body.appendChild(popup);
        const rect = DefCorpus.getBoundingClientRect();
        popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
        popup.style.left = `${rect.left}px`;
        popup.style.display = "block";
    });
    
    const DefPower = document.getElementById("definition-power");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "Power, for Foucault, refers to the knowledge systems which create cultural understandings of objects and practices. These systems define objects in particular ways, which produce effects in the lived lives of subjects.";

    DefPower.addEventListener("mouseover", () => {
        document.body.appendChild(popup);
        const rect = DefCorpus.getBoundingClientRect();
        popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
        popup.style.left = `${rect.left}px`;
        popup.style.display = "block";
    });
    
    const DefRomantic = document.getElementById("definition-romantic");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "Romantic, as I am using it, refers to a historical period at the turn of the nineteenth century. The Romantic disposition was commonly associated with tuberculosis, as Romantic poet John Keats famously died young (in 1821) having been restlessly consumed by his tubercular ailment.";

    DefRomantic.addEventListener("mouseover", () => {
        document.body.appendChild(popup);
        const rect = DefCorpus.getBoundingClientRect();
        popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
        popup.style.left = `${rect.left}px`;
        popup.style.display = "block";
    });
</script>