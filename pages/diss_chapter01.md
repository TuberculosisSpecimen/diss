---
title: "Chapter 1, Some Random Title"
layout: chapter
permalink: "/dissertation/1/"
chapterno: 1
---
<style>
.popup {
        display: none;
        position: absolute;
        background-color: white;
        color: black;
        padding: 5px;
        border-radius: 5px;
        border-color: black;
        border-style: solid; 
        border-width: 1px; /* Added border-width */
        z-index: 9999;
        max-width: 220px; /* Set the maximum width for the popup */
        font-size: 15px; /* Added text size */
        font-style: oblique; /* Added text style */
    }

    /* Style for the word "influential" when hovered */
    #word-tooltip:hover {
        text-decoration: underline;
        color: blue; /* Change the color to your preferred hover color */
    }

    .opaque-lines {
        opacity: 1; /* Set initial opacity for partial view */
    }

    .toggle-buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
    .toggle-button {
        padding: 8px 12px;
        background-color: #f1f1f1;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .toggle-button.active {
        background-color: #007bff; /* Change to your preferred active button color */
        color: white;
    }
</style>
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

<hr>

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
