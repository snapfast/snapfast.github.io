---
layout: page
title: Projects
---

A collection of applications, tools, and experiments I've built.

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.project-image-wrapper {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #111111;
}

.project-title a {
  color: inherit;
  text-decoration: none;
}

.project-title a:hover {
  text-decoration: underline;
}

.project-description {
  font-size: 0.95rem;
  color: #555555;
  margin: 0 0 20px 0;
  line-height: 1.5;
  flex-grow: 1;
}

.project-footer {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: auto;
}

.project-link {
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  color: #0076ff;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.project-link:hover {
  text-decoration: underline;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  .project-card {
    background: #1e1e1e;
    border-color: #333333;
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
  }
  .project-card:hover {
    box-shadow: 0 8px 15px rgba(0,0,0,0.3);
  }
  .project-title {
    color: #f5f5f7;
  }
  .project-description {
    color: #aaaaaa;
  }
  .project-link {
    color: #2997ff;
  }
}
</style>

<div class="projects-grid">

  <!-- Linguist by Rahul Bali -->
  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80" alt="Linguist - Language learning" />
    </div>
    <div class="project-content">
      <h3 class="project-title">
        <a href="https://linguist.rahulbali.in" target="_blank" rel="noopener noreferrer">Linguist</a>
      </h3>
      <p class="project-description">An elegant, modern application designed for language enthusiasts to learn and master new languages with ease.</p>
      <div class="project-footer">
        <a class="project-link" href="https://linguist.rahulbali.in" target="_blank" rel="noopener noreferrer">
          Launch App <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Astrology by Rahul Bali -->
  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80" alt="Astrology - Celestial Insights" />
    </div>
    <div class="project-content">
      <h3 class="project-title">
        <a href="https://astrology.rahulbali.in" target="_blank" rel="noopener noreferrer">Astrology</a>
      </h3>
      <p class="project-description">Explore deep insights into celestial patterns, cosmic alignments, and starry planetary movements across the cosmos.</p>
      <div class="project-footer">
        <a class="project-link" href="https://astrology.rahulbali.in" target="_blank" rel="noopener noreferrer">
          Launch App <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- ZenFlow AI -->
  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80" alt="ZenFlow AI - Mindfulness Companion" />
    </div>
    <div class="project-content">
      <h3 class="project-title">ZenFlow AI</h3>
      <p class="project-description">An AI-powered mindfulness and meditation companion designed to personalize consciousness exploration and wellness journeys.</p>
      <div class="project-footer">
        <span style="font-size: 0.85rem; color: #888888; display: inline-flex; align-items: center; gap: 5px;">
          <i class="fas fa-code"></i> Code link coming soon
        </span>
      </div>
    </div>
  </div>

  <!-- Ovale -->
  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80" alt="Ovale - Wallpaper Application" />
    </div>
    <div class="project-content">
      <h3 class="project-title">Ovale</h3>
      <p class="project-description">A minimalist wallpaper application designed with aesthetics, beautiful gradients, and simplicity at its core.</p>
      <div class="project-footer">
        <span style="font-size: 0.85rem; color: #888888; display: inline-flex; align-items: center; gap: 5px;">
          <i class="fas fa-clock"></i> Coming soon
        </span>
      </div>
    </div>
  </div>

  <!-- inm - in my notes -->
  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80" alt="inm - in my notes" />
    </div>
    <div class="project-content">
      <h3 class="project-title">inm</h3>
      <p class="project-description">A fast, minimal, and secure notebook tool to keep thoughts and ideas organized in their simplest form.</p>
      <div class="project-footer">
        <span style="font-size: 0.85rem; color: #888888; display: inline-flex; align-items: center; gap: 5px;">
          <i class="fas fa-clock"></i> Coming soon
        </span>
      </div>
    </div>
  </div>

</div>
