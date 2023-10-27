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

	function toggleOpacity(mode) {
		const Knopf_1922_0003_Cropped = document.getElementByID('Knopf_1922_0003_Cropped');
		const CityofChicagoMunicipalTub1-4_1917-1924_358 = document.getElementByID('CityofChicagoMunicipalTub1-4_1917-1924_358');
		const CityofChicagoMunicipalTub1-4_1917-1924_440 = document.getElementByID('CityofChicagoMunicipalTub1-4_1917-1924_440');

        if (mode === 'partial') {
            Knopf_1922_0003_Cropped.src = "{{ site.baseurl }}/assets/items/Knopf_1922_0003_Cropped_partial.jpg";
			CityofChicagoMunicipalTub1-4_1917-1924_358.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub1-4_1917-1924_358_partial.jpg";
			CityofChicagoMunicipalTub1-4_1917-1924_440.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub1-4_1917-1924_440_partial.jpg";
            });

            
        } else if (mode === 'opaque') {
           	Knopf_1922_0003_Cropped.src = "{{ site.baseurl }}/assets/items/Knopf_1922_0003_Cropped_full.jpg";
			CityofChicagoMunicipalTub1-4_1917-1924_358.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub1-4_1917-1924_358_full.jpg";
			CityofChicagoMunicipalTub1-4_1917-1924_440.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub1-4_1917-1924_440_full.jpg";
            });
        }
        else if (mode === 'non-opaque'){
            Knopf_1922_0003_Cropped.src = "{{ site.baseurl }}/assets/items/Knopf_1922_0003_Cropped.jpg";
			CityofChicagoMunicipalTub1-4_1917-1924_358.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub1-4_1917-1924_358.jpg";
			CityofChicagoMunicipalTub1-4_1917-1924_440.src = "{{ site.baseurl }}/assets/items/CityofChicagoMunicipalTub1-4_1917-1924_440.jpg";
            });
        }
    }
    
</script>
