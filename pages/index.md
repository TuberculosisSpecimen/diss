---
layout: page
permalink: /dissertation/index
A: "Anatomy, Parisian Method"
B: "Bentham, Jeremy"
C: "Coproduction of Reality;Critical Digital Humanities;Cure, Labor;Cure, Rest;Cure,Open Air Treatment"
D: "Digital Humanities, Data"
E: "Ethics, Biomedical;Ethics, Postcolonial"
F: "Flick, Lawrence F."
G: "Galen;Grave Robbing"
H: "Hall, Stuart;Henry Phipps Institute, The;Hypertext"
I: "Informed Consent;Insurance, Medical"
J:
K: "Koch, Robert"
L: "Laënnec, René Theophile Hyacinthe;Lilly, Eli"
M: "Media Objects;Media Studies;Method, Corpus;Method, Content Analysis;Method, Corpus;Method, Dataset;Method, Indigenous Research;Method, Speculative Research;Method, Textual Analysis;MOVE Bombing;MTEST"
N: "Native American Graves Protection and Repatriation Act;New Materialism"
O: "Objectivity"
P: "Philadelphia;Phipps, Henry;Power, Foucauldian"
Q: 
R: "Racism, Medical;Racism, Scientific;Ramses II;Relationality;Research Object;Research Subject;Rockefeller, John D."
S: "Smith, Southwood"
T:
U:
V:
W:
X:
Y:
Z:
---

<h4>M:</h4>
{% assign Mindex = page.M | split: ";" %}
{% for Mitem in Mindex %}
<h5>{{ Mitem }}</h5>
{% capture Mlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Mitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Mlist | remove_first: " | " }}{%- endfor -%}
