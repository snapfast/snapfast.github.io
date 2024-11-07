---
layout: default
title: Home
---

<div>
{% for post in site.posts %}
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%Y-%-%d" }}</small>
    <p>{{ post.excerpt }}</p>
{% endfor %}
</div>
