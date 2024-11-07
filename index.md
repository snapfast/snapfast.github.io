---
layout: default
title: Home
---


{% for post in site.posts %}
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%Y-%m-%d" }}</small>
    {{ post.excerpt }}
{% endfor %}
