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
    popup.innerText = "Corpus refers to a large collection of texts that have been collected for statistical analysis. It is used regularly in the fields of computational linguistics and the digital humanities.";

    DefCorpus.addEventListener("mouseover", () => {
        document.body.appendChild(popup);
        const rect = DefCorpus.getBoundingClientRect();
        popup.style.top = `${rect.top - popup.clientHeight + 580}px`; // Adjust positioning to display above the word
        popup.style.left = `${rect.left}px`;
        popup.style.display = "block";
    });

</script>