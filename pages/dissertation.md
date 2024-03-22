---
title: Dissertation
layout: section # this refers to another file found at diss/_layouts
permalink: /dissertation
---

<ul>
{% assign listofsections = site.dissertation | sort: "chapter" %} # this creates a new operation associated with the .md metadata "chapter" 
{% for chapterinfo in listofsections %} # Looking through the markdown files this line and the line below orders and creates a link to the relevant section.
<li><a href="/diss/dissertation/{{ chapterinfo.chapter |string}}/#{{ chapterinfo.chapter }}.{{ chapterinfo.section }}.{{ chapterinfo.subsection }}">{{ chapterinfo.chapterdisplay }}.{{ chapterinfo.sectiondisplay }}.{{ chapterinfo.subsectiondisplay }}: {{ chapterinfo.title }}</a>
{% endfor %}
</ul>