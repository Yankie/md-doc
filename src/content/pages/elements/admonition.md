---
title: Примечания
---


{% set admonitionTypes = ['note',
    'summary', 'abstract', 'tldr',
    'info', 'todo',
    'tip', 'hint',
    'success', 'check', 'done',
    'question', 'help', 'faq',
    'warning', 'attention', 'caution',
    'failure', 'fail', 'missing',
    'danger', 'error', 'bug',
    'example', 'snippet',
    'quote', 'cite'] %}


{% for admonition in admonitionTypes %}

## {{ admonition | upper }}

!!!{{admonition}} {{ admonition | upper }}
    Always include the `prose` class when adding a gray scale modifier

{% endfor %}
