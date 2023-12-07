---
title: "Arts-Based Research: Variations on Opacity"
layout: chapter
permalink: "/dissertation/4/"
chapterno: 4
---

{% assign listofsections = site.dissertation | where: 'chapter', page.chapterno | sort: "section" %}
{% for chapterinfo in listofsections %}
<h3><a name="{{ page.chapterno }}.{{ chapterinfo.section }}.{{ chapterinfo.subsection }}"></a>{{ chapterinfo.chapterdisplay }}.{{ chapterinfo.sectiondisplay }}.{{ chapterinfo.subsectiondisplay }}: {{ chapterinfo.title }}</h3>
<p>{{ chapterinfo.content }}
{% endfor %}