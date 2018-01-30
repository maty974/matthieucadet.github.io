---
layout: curriculum
title: Curriculum Vitae
permalink: /cv/
---

{{ site.data.resume_raw.author_data.name }}
==============
<img title=""
     class="float-this film-thumb"
     src="/static/matthieu-cadet-portrait.png">
_{{ site.data.resume_raw.head_title }}_

{{ site.data.resume_raw.head_description }}

* __Né à :__ {{ site.data.resume_raw.author_data.birthplace }}
* __Nationalité :__ {{ site.data.resume_raw.author_data.nationality }}
* __État civil :__ {{ site.data.resume_raw.author_data.civil_status }}
* __Langues :__ {{ site.data.resume_raw.author_data.language }}
* __e-mail :__ [{{ site.data.resume_raw.author_data.email }}](mailto:{{ site.data.resume_raw.author_data.email }})
* __Téléphone :__ [{{ site.data.resume_raw.author_data.tel }}](tel:{{ site.data.resume_raw.author_data.tel }})
* __Site web :__ [{{ site.data.resume_raw.author_data.website }}]({{ site.data.resume_raw.author_data.website }})

Connaissances Techniques
------------------------
### {{ site.data.resume_raw.softwares.label }} :
{% for data_value in site.data.resume_raw.softwares.list %}
- {{ data_value -}}
{% endfor %}

### {{ site.data.resume_raw.programming_skills.label }} :
{% for data_value in site.data.resume_raw.programming_skills.list %}
- {{ data_value -}}
{% endfor %}

{{ site.data.resume_raw.work_experiences.label }}
-------------------------
<!-- TODO: add french month name https://stackoverflow.com/a/38946698 -->
{% assign work_experiences = site.data.resume_raw.work_experiences.list | sort: 'period_end' | reverse %}
{% for data_value in work_experiences %}
{% if data_value.publish or jekyll.environment == "development" %}
### {{ data_value.job_title }}
<span class="cv-when-where">{{ data_value.period_start | date: "%Y" }} &ndash; {{ data_value.period_end | date: "%Y" }} | <a href="{{ data_value.job_company_url }}" target="_blank">{{ data_value.job_company }}</a></span>
<img title="{{ data_value.subject_title }}"
    class="float-this film-thumb"
    src="{{ data_value.subject_thumbnail }}">

*{{ data_value.subject_title }}* / {{ data_value.subject_type }}
{% for task_value in data_value.tasks %}
- {{ task_value -}}
{% endfor %}
{% endif %}
{% endfor %}
<div style="clear: both;"></div>

### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Novembre 2015 &ndash; Juillet 2016 (1 year 9 months) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://youtu.be/9BFweFCDpsM" target="_blank">
<img title="The Son of Bigfoot"
     class="float-this film-thumb"
     src="/static/movie_posters/son-of-bigfoot-poster.jpg">
</a>

*The Son of Bigfoot* / long metrage d'animation 3D
- Compositing 3D & Stéréo
- Développement du pipeline Nuke & Davinci Resolve
- Développement d'outils interne de suivi de production

<div style="clear: both;"></div>

### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Octobre 2013 &ndash; Octobre 2015 (2 years 1 month) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://vimeo.com/133013937" target="_blank">
<img title="Robinson Crusoe"
     class="float-this film-thumb"
     src="/static/movie_posters/robinson-crusoe-poster.jpg">
</a>

*Robinson Crusoe* / long metrage d'animation 3D
- Compositing 3D & Stéréo
- Développement d'outils interne

<div style="clear: both;"></div>


### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Mai 2012 &ndash; Octobre 2013 (1 year 6 months) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://vimeo.com/77062169" target="_blank">
<img title="The House of Magic"
     class="float-this film-thumb"
     src="/static/movie_posters/house-of-magic-poster.jpg">
</a>

*The House of Magic* / long metrage d'animation 3D
- Compositing 3D & Stéréo
- Développement d'outils interne

<div style="clear: both;"></div>


### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Octobre 2010 &ndash; Mai 2012 (1 year 8 months) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://youtu.be/pv8cs0RQJrI" target="_blank">
<img title="Sammy 2 “3D”"
     class="float-this film-thumb"
     src="/static/movie_posters/sammy2-poster.jpg">
</a>

*A Turtle's Tale 2 ( Sammy 2 )* / long metrage d'animation 3D
- Compositing 3D & Stéréo
- Développement d'outils interne

<div style="clear: both;"></div>


### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Mars 2010 &ndash; Septembre 2010 (7 months) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://youtu.be/35r3-y7BSts" target="_blank">
<img title="The Little Prince"
     class="float-this film-thumb"
     src="/static/movie_posters/the-little-prince-poster.jpg">
</a>

*The Little Prince ( Le Petit Prince )* / Attraction 3D Stéréo
- Compositing 3D & Stéréo
- Développement d'outils interne

<div style="clear: both;"></div>


### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Novembre 2009 &ndash; Mars 2010 (5 months) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://youtu.be/O9g0yu4Ms4A" target="_blank">
<img title="Pirates Story 4D"
     class="float-this film-thumb"
     src="/static/movie_posters/pirates-story-poster.jpg">
</a>

*Pirates Story 4D* / Attraction 3D Stéréo
- Compositing 3D & Stéréo
- Développement d'outils interne

<div style="clear: both;"></div>


### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Janvier 2008 &ndash; Novembre 2009 (1 year 11 months) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://vimeo.com/75391177" target="_blank">
<img title="A turtle's tale"
     class="float-this film-thumb"
     src="/static/movie_posters/sammy1-poster.jpg">
</a>

*A Turtle's Tale ( Le Voyage Extraordinaire de Samy )* / long metrage d'animation 3D
- Compositing 3D & Stéréo
- Développement d'outils interne

<div style="clear: both;"></div>


### Senior Compositing Artist TD & Pipeline Developer
<span class="cv-when-where">Mai 2006 &ndash; Aout 2007 (1 year 4 months) | <a href="http://www.nwave.com/" target="_blank">nWave Digital</a></span>
<a href="https://youtu.be/a1smyXGnZao" target="_blank">
<img title="Fly Me To The Moon"
     class="float-this film-thumb"
     src="/static/movie_posters/fly-me-to-the-moon-poster.jpg">
</a>

*Fly me to the moon* / long metrage d'animation 3D
- Compositing 3D & Stéréo
- Développement d'outils interne

<div style="clear: both;"></div>


{{ site.data.resume_raw.education.label }}
---------
{% for data_value in site.data.resume_raw.education.list %}
__{{ data_value.period }}__ | {{ data_value.degree }} | {{ data_value.school_name }} {% if data_value.school_url %}(<a href="{{ data_value.school_url }}" target="_blank">{{ data_value.school_shortname }}</a>){% endif %}<br><small>{{ data_value.school_place }}</small>
{%- endfor %}

{{ site.data.resume_raw.hobbies.label }}
-------
{% for data_value in site.data.resume_raw.hobbies.list %}
- {{ data_value -}}
{% endfor %}
