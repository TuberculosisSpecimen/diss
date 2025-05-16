---
layout: page
permalink: /dissertation/index
A: "Acid Fast Bacteria;Actor Network Theory;Adirondack Cottage Sanitarium;Adobe Photoshop;Anatomy, Parisian Method;Animal Testing;Anthrax;Anthropocentrism;Antiessentialism;Architecture, Hygiene;Archives, Anti-Custodial;Archives, Community;Archives, Medical;Atomic Bomb;Auscultation"
B: "Bacteriology;Baldwin, Edward R.;Barthes, Roland;Bentham, Jeremy;Biopolitics;Bodington, George;Born-Digital Projects;Breckinridge, Curry Desha;Bremer, Herman;Brown, Lawrason;Bushnell, George E."
C: "Cascading Style Sheets (CSS);Case Studies;Chemical Dyes;Chicago Municipal Tuberculosis Sanatorium;Circumcision;City of Chicago Municipal Sanatorium;Clinical Gaze;Clinical Photography;Clinical Vision;Coding, Javascript;Community Peer Review;Consent;Coproduction of Reality;Corper, H. J.;Cragmor Sanatorium;Critical Art Ensemble;Critical Digital Humanities;Cultural Imperialism, American;Cure, Labor;Cure, Open-Air;Cure, Rest;Cure, Working;Cure,Open Air Treatment"
D: "Data, Capta;Data, Critical DH;de Certeau, Michel;Death Studies;Death Studies, Death Culture;Deleuze, Gilles;Dermatology;Dermographic Opacities;Digital Humanities, Black;Digital Humanities, Critical;Digital Humanities, Data;Digital Humanities, Workflow;Discipline;Discipline, Foucauldian"
E: "Emerson, Ralph Waldo;Essentialism;Ethics;Ethics, Biomedical;Ethics, Postcolonial;Eugenics"
F: "Flick, Lawrence F.;Foucault, Michel"
G: "Galen;Germ Theory;GIMP;Glissant, Édouard;Global University System, The;Grave Robbing;Guattari, Felix;Guilt"
H: "Hall, Stuart;Henry Phipps Institute, The;Hesiod;Heuristics;Histochemistry;Histology;HIV/AIDS;Humanism;Humanism, Antihumanism;Humanism, White Supremacy;Humanities Computing;Hygiene;Hypertext"
I: "Indigenous Science;Informed Consent;Inscription;Installation Art;Institute for Digital Arts and Humanities;Insurance, Medical;Interdisciplinarity;Iteration"
J: "Jekyll"
K: "Keats, John;King Edward VII Sanatorium, The;Koch, Robert;Koch, Robert, Postulates;Kuhn, Thomas"
L: "Laënnec, René Theophile Hyacinthe;Latour, Bruno;Librarianship, Medical;Life History of Objects;Lilly, Eli"
M: "MacLaren, Thomas;Manifest Destiny;McCaughan, Mac;Media Objects;Media Studies;Medical Racism;Meningeal Tuberculosis;Method, Arts-Based;Method, Content Analysis;Method, Corpus;Method, Dataset;Method, Ethics as;Method, Ethics Audit;Method, Indigenous Research;Method, Speculative Art History;Method, Speculative Research;Method, Textual Analysis;Method, Web Design;Methods, Arts-based;Methods, Design-Based;Methods, Iterative;Methods, Practice-based;Methods, Recursive;Methods, Surfacist;Methods, Tactical;Microphotography;Microscopy;Minimal Computing;Modern Orpheus, The;MOVE Bombing;Mütter Museum, The;Mycobacterium Tuberculosis"
N: "National Jewish Hospital for Consumptives;Native American Graves Protection and Repatriation Act;Necropolitics;New Materialism"
O: "Object Oriented Ontology;Objectivity;Obligation;Opacity;Open Access Publishing"
P: "Paradigm;Parasite, The;Pasteur, Louis;Pathology;Philadelphia;Phipps, Henry;Photography;Postcolonial Theory;Posthumanism;Power, Foucauldian;Power/Knowledge;Prometheus;Prototyping;Public Health;Public Health, Education;Public Health, Nurses"
R: "Racism, Medical;Racism, Scientific;Ramses II;Refusal;Relationality;Relationality, Indigenous;Research Object;Research Subject;Research, Arts-Based;Rockefeller, John D.;Romanticism;Röntgen, Wilhelm"
S: "Sanatorium, Architecture;Sanatorium, Movement;Sanatorium, Treatment;Saranac Lake;Science, Anticolonial;Serres, Michel;Simpson, Audra;Skin Studies;Smith, Southwood;Solly, Edwin;Sontag, Susan;Specimen, Wet Tissue;Static Websites;Superchunk;Surgeons Hall"
T: "Tactical Media Art;Tactics;Terminal Imaginaries;Theory, Anticolonial;Theory, Indigenous;Theory, Postcolonial;Treatment, Open Air;Treatment, Rest Cure;Treatment, Working Cure;Trudeau, Edward Livingston;Tubercule;Tuberculous Imaginaries;Tuskegee Syphilis Study"
U: "United States Military"
V: "Video Art;Video Editing;Video Editing, Selects;Virtual Human Project, The;Visual Culture;Vivisected Earth, The"
W: "Webb, Gerald B.;Wet Tissue Specimens;Willis, Holly;Woolgar, Steve;World War I;Wynter, Sylvia"

---

<h2>A:</h2>
<div style="padding-left:50px">{% assign Aindex = page.A | split: ";" %}
{% for Aitem in Aindex %}
<h5>{{ Aitem }}</h5>
{% capture Alist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Aitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Alist | remove_first: " | " }}{%- endfor -%}</div>

<h2>B:</h2>
<div style="padding-left:50px">{% assign Bindex = page.B | split: ";" %}
{% for Bitem in Bindex %}
<h5>{{ Bitem }}</h5>
{% capture Blist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Bitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Blist | remove_first: " | " }}{%- endfor -%}</div>

<h2>C:</h2>
<div style="padding-left:50px">{% assign Cindex = page.C | split: ";" %}
{% for Citem in Cindex %}
<h5>{{ Citem }}</h5>
{% capture Clist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Citem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Clist | remove_first: " | " }}{%- endfor -%}</div>

<h2>D:</h2>
<div style="padding-left:50px">{% assign Dindex = page.D | split: ";" %}
{% for Ditem in Dindex %}
<h5>{{ Ditem }}</h5>
{% capture Dlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Ditem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Dlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>E:</h2>
<div style="padding-left:50px">{% assign Eindex = page.E | split: ";" %}
{% for Eitem in Eindex %}
<h5>{{ Eitem }}</h5>
{% capture Elist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Eitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Elist | remove_first: " | " }}{%- endfor -%}</div>

<h2>F:</h2>
<div style="padding-left:50px">{% assign Findex = page.F | split: ";" %}
{% for Fitem in Findex %}
<h5>{{ Fitem }}</h5>
{% capture Flist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Fitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Flist | remove_first: " | " }}{%- endfor -%}</div>

<h2>G:</h2>
<div style="padding-left:50px">{% assign Gindex = page.G | split: ";" %}
{% for Gitem in Gindex %}
<h5>{{ Gitem }}</h5>
{% capture Glist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Gitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Glist | remove_first: " | " }}{%- endfor -%}</div>

<h2>H:</h2>
<div style="padding-left:50px">{% assign Hindex = page.H | split: ";" %}
{% for Hitem in Hindex %}
<h5>{{ Hitem }}</h5>
{% capture Hlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Hitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Hlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>I:</h2>
<div style="padding-left:50px">{% assign Iindex = page.I | split: ";" %}
{% for Iitem in Iindex %}
<h5>{{ Iitem }}</h5>
{% capture Ilist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Iitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Ilist | remove_first: " | " }}{%- endfor -%}</div>

<h2>J:</h2>
<div style="padding-left:50px">{% assign Jindex = page.J | split: ";" %}
{% for Jitem in Jindex %}
<h5>{{ Jitem }}</h5>
{% capture Jlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Jitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Jlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>K:</h2>
<div style="padding-left:50px">{% assign Kindex = page.K | split: ";" %}
{% for Kitem in Kindex %}
<h5>{{ Kitem }}</h5>
{% capture Klist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Kitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Klist | remove_first: " | " }}{%- endfor -%}</div>

<h2>L:</h2>
<div style="padding-left:50px">{% assign Lindex = page.L | split: ";" %}
{% for Litem in Lindex %}
<h5>{{ Litem }}</h5>
{% capture Llist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Litem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Llist | remove_first: " | " }}{%- endfor -%}</div>

<h2>M:</h2>
<div style="padding-left:50px">{% assign Mindex = page.M | split: ";" %}
{% for Mitem in Mindex %}
<h5>{{ Mitem }}</h5>
{% capture Mlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Mitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Mlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>N:</h2>
<div style="padding-left:50px">{% assign Nindex = page.N | split: ";" %}
{% for Nitem in Nindex %}
<h5>{{ Nitem }}</h5>
{% capture Nlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Nitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Nlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>O:</h2>
<div style="padding-left:50px">{% assign Oindex = page.O | split: ";" %}
{% for Oitem in Oindex %}
<h5>{{ Oitem }}</h5>
{% capture Olist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Oitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Olist | remove_first: " | " }}{%- endfor -%}</div>

<h2>P:</h2>
<div style="padding-left:50px">{% assign Pindex = page.P | split: ";" %}
{% for Pitem in Pindex %}
<h5>{{ Pitem }}</h5>
{% capture Plist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Pitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Plist | remove_first: " | " }}{%- endfor -%}</div>

<h2>R:</h2>
<div style="padding-left:50px">{% assign Rindex = page.R | split: ";" %}
{% for Ritem in Rindex %}
<h5>{{ Ritem }}</h5>
{% capture Rlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Ritem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Rlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>S:</h2>
<div style="padding-left:50px">{% assign Sindex = page.S | split: ";" %}
{% for Sitem in Sindex %}
<h5>{{ Sitem }}</h5>
{% capture Slist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Sitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Slist | remove_first: " | " }}{%- endfor -%}</div>

<h2>T:</h2>
<div style="padding-left:50px">{% assign Tindex = page.T | split: ";" %}
{% for Titem in Tindex %}
<h5>{{ Titem }}</h5>
{% capture Tlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Titem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Tlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>U:</h2>
<div style="padding-left:50px">{% assign Uindex = page.U | split: ";" %}
{% for Uitem in Uindex %}
<h5>{{ Uitem }}</h5>
{% capture Ulist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Uitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Ulist | remove_first: " | " }}{%- endfor -%}</div>

<h2>V:</h2>
<div style="padding-left:50px">{% assign Vindex = page.V | split: ";" %}
{% for Vitem in Vindex %}
<h5>{{ Vitem }}</h5>
{% capture Vlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Vitem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Vlist | remove_first: " | " }}{%- endfor -%}</div>

<h2>W:</h2>
<div style="padding-left:50px">{% assign Windex = page.W | split: ";" %}
{% for Witem in Windex %}
<h5>{{ Witem }}</h5>
{% capture Wlist %}{%- for dissloop in site.dissertation -%}
{% if dissloop.indexterms contains Witem %} | <a href="{{ site.baseurl }}/dissertation/{{ dissloop.chapter }}_{{ dissloop.section }}_{{ dissloop.subsection }}">{{ dissloop.chapter }}.{{ dissloop.section }}.{{ dissloop.subsection }}</a>{% endif %}{% endfor %}{% endcapture %}{{ Wlist | remove_first: " | " }}{%- endfor -%}</div>