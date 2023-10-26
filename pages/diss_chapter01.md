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
    const popupcorpus = document.createElement("div");
    popupcorpus.classList.add("popup-corpus");
    popupcorpus.innerText = "Corpus here refers to the creation of a collection of written texts which are used for quantitative analysis. Most commonly, corpuses are constructed for computational linguistic studies, but are also used by digital humanists interested in textual analysis.";

    const DefInterdisc = document.getElementById("word-interdisc");
    const popupinterdisc = document.createElement("div");
    popupinterdisc.classList.add("popup-interdisc");
    popupinterdisc.innerText = "I use interdisciplinary to describe a conversation with and adoption of different methods practiced by a range of academic fields.";

 	DefCorpus.addEventListener("mouseover", () => {
        document.body.appendChild(popupcorpus);
        const rect = DefCorpus.getBoundingClientRect();
        popupcorpus.style.top = `${rect.top - popupcorpus.clientHeight + 580}px`; // Adjust positioning to display above the word
        popupcorpus.style.left = `${rect.left}px`;
        popupcorpus.style.display = "block";
    });
    
    DefInterdisc.addEventListener("mouseover", () => {
        document.body.appendChild(popupinterdisc);
        const rect = DefInterdisc.getBoundingClientRect();
        popupinterdisc.style.top = `${rect.top}px`; // Adjust positioning to display above the word
        popupinterdisc.style.left = `${rect.left}px`;
        popupinterdisc.style.display = "block";
    });
    
	DefCorpus.addEventListener("mouseout", () => {
        popupcorpus.style.display = "none";
        popupcorpus.remove();
    });
    
    DefInterdisc.addEventListener("mouseout", () => {
        popupinterdisc.style.display = "none";
        popupinterdisc.remove();
    });
    
</script>