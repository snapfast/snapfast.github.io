---
layout: default
title: Home
---


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>{{ post.date }}</small>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

