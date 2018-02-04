---
layout: curriculum
title: Curriculum Vitae
permalink: /cv/
---

{{ site.data.resume_raw.author.name }}
==============
<img title=""
     class="float-this film-thumb"
     src="/static/matthieu-cadet-portrait.png">
_{{ site.data.resume_raw.head_title }}_

<!-- Description -->

{{ site.data.resume_raw.head_description }}

* __Né à :__ {{ site.data.resume_raw.author.birthplace }}
* __Nationalité :__ {{ site.data.resume_raw.author.nationality }}
* __État civil :__ {{ site.data.resume_raw.author.civil_status }}
* __Langues :__ {{ site.data.resume_raw.author.language }}
* __e-mail :__ [{{ site.data.resume_raw.author.email }}](mailto:{{ site.data.resume_raw.author.email }})
* __Téléphone :__ [{{ site.data.resume_raw.author.tel }}](tel:{{ site.data.resume_raw.author.tel }})
* __Site web :__ [{{ site.data.resume_raw.author.website }}]({{ site.data.resume_raw.author.website }})

Connaissances Techniques
------------------------
<!-- Logiciels -->

### {{ site.data.resume_raw.softwares.label }} :
{% for data_value in site.data.resume_raw.softwares.list %}
- {{ data_value -}}
{% endfor %}

<!-- Programmation -->

### {{ site.data.resume_raw.programming_skills.label }} :
{% for data_value in site.data.resume_raw.programming_skills.list %}
- {{ data_value -}}
{% endfor %}

<!-- Expérience Professionnelle -->

{{ site.data.resume_raw.work_experiences.label }}
-------------------------
<!-- TODO: add french month name https://stackoverflow.com/a/38946698 -->
{% assign work_experiences = site.data.resume_raw.work_experiences.list | sort: 'period_end' | reverse %}
{% for data_value in work_experiences %}
{% if data_value.publish or jekyll.environment == "development" %}
### {{ data_value.job_title }}
<span class="cv-when-where">{{ data_value.period_start | date: "%B %Y" }} &ndash; {{ data_value.period_end | date: "%B %Y" }} | <a href="{{ data_value.job_company_url }}" target="_blank">{{ data_value.job_company }}</a></span>
<a {% if data_value.subject_url -%}
    href="{{ data_value.subject_url }}" target="_blank"
{%- endif -%}>
<img title="{{ data_value.subject_title }}"
    class="float-this film-thumb"
    src="{{ data_value.subject_thumbnail }}">
</a>

*{{ data_value.subject_title }}* / {{ data_value.subject_type }}
{% for task_value in data_value.tasks %}
- {{ task_value -}}
{% endfor %}
{% endif %}
<div style="clear: both;"></div>
{% endfor %}

<!-- Formations -->

{{ site.data.resume_raw.education.label }}
---------
{% for data_value in site.data.resume_raw.education.list %}
__{{ data_value.period }}__ | {{ data_value.degree }} | {{ data_value.school_name }} {% if data_value.school_url %}(<a href="{{ data_value.school_url }}" target="_blank">{{ data_value.school_shortname }}</a>){% endif %}<br><small>{{ data_value.school_place }}</small>
{%- endfor %}

<!-- Loisirs -->

{{ site.data.resume_raw.hobbies.label }}
-------
{% for data_value in site.data.resume_raw.hobbies.list %}
- {{ data_value -}}
{% endfor %}
