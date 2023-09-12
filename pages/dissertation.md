---
title: Dissertation
layout: section
permalink: /dissertation
---

<ul>
{% assign listofsections = site.dissertation | sort: "chapter" %}
{% for chapterinfo in listofsections %}
<li><a href="/diss/dissertation/{{ chapterinfo.chapter |string}}/#{{ chapterinfo.chapter }}.{{ chapterinfo.section }}.{{ chapterinfo.subsection }}">{{ chapterinfo.chapterdisplay }}.{{ chapterinfo.sectiondisplay }}.{{ chapterinfo.subsectiondisplay }}: {{ chapterinfo.title }}</a>
{% endfor %}
</ul>