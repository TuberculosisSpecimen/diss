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
    popup.innerText = "Corpus here refers to the creation of a collection of written texts which are used for quantitative analysis. Most commonly, corpuses are constructed for computational linguistic studies, but are also used by digital humanists interested in textual analysis";

    const tooltipOffsetX = 10; // Adjust the X offset (horizontal distance from the DefCorpus element)
    const tooltipOffsetY = -16; // Adjust the Y offset (vertical distance from the DefCorpus element)


    popup.style.position = "absolute";
    popup.style.top = `${DefCorpus.offsetTop + tooltipOffsetY}px`;
    popup.style.left = `${DefCorpus.offsetLeft + tooltipOffsetX}px`;

    // Append the tooltip to the body element
    document.body.appendChild(popup);

    // Hide the tooltip initially
    popup.style.display = "none";

    // Add a mouseover event listener to the DefCorpus element
    DefCorpus.addEventListener("mouseover", () => {
        popup.style.display = "block";
    });

    // Add a mouseout event listener to the DefCorpus element
    DefCorpus.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });
    
</script>