---
permalink: dissertation/tableofcontents
layout: page
---
{% for chapterloop in site.dissertation %}
{% if chapterloop.section == "0" %}
{% if chapterloop.subsection == "0" %}
<h1><a href="{{ site.baseurl }}/dissertation/{{ chapterloop.chapter }}_{{ chapterloop.section }}_{{ chapterloop.subsection }}">{{ chapterloop.sectiontitle }}</a></h1>
{{ chapterloop.info }}
{% assign chapnumber = chapterloop.chapter %}
{% for sectionloop in site.dissertation %}
{%- if sectionloop.chapter == chapnumber -%}
{% if sectionloop.subsection == "0" %}
{% if sectionloop.section != "0" %}
<h4>{{ sectionloop.sectiontitle }}</h4>
{{ sectionloop.info }}<br>
<b>Subsections:</b>
{% endif %}{% endif %}
{%- if sectionloop.subsection != "0" -%}{% if sectionloop.subsection != "1" %} | {% endif %}<a href="{{ site.baseurl }}/dissertation/{{ sectionloop.chapter }}_{{ sectionloop.section }}_{{ sectionloop.subsection }}">{{ sectionloop.chapter }}.{{ sectionloop.section }}.{{ sectionloop.subsection }}</a>{%- endif -%}{%- endif -%}
{% endfor %}
{% endif %}
{% endif %}
{% endfor %}
<h2><a href="{{ site.baseurl }}/dissertation/index">Index</a></h2>