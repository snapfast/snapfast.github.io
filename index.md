---
layout: default
title: Home
---

<div>
{% for post in site.posts %}
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%dd %mmm %Y" }}</small>
    <p>{{ post.excerpt }}</p>
{% endfor %}
</div>
