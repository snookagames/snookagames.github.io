---
layout: default
title: SnookaGames - Play Free Online Games
description: Play free online games at SnookaGames. Browse and enjoy a huge collection of fun games.
---

<script>
  const p = new URLSearchParams(window.location.search);
  let g = [];
  {% for game in site.games %}
    g.push({ 
      title: "{{ game.title | escape }}", 
      url: "{{ game.url | relative_url }}", 
      image: "{{ game.image | escape }}" 
    });
  {% endfor %}
  setTimeout(() => {
    if (p.has("query")) {
      document.querySelector("#s").textContent = `Searching for: ${p.get("query")}`;
      const q = p.get("query").toLowerCase();
      const filtered = g.filter(game => game.title.toLowerCase().includes(q));
      const grid = document.querySelector(".game-grid");
      grid.innerHTML = "";
      if (filtered.length === 0) {
        grid.innerHTML = "<p>No games found.</p>";
      } else {
        filtered.forEach(game => {
          const a = document.createElement("a");
          a.href = game.url;
          a.className = "game-card";
          a.title = game.title;
          a.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-title">${game.title}</div>
          `;
          grid.appendChild(a);
        });
      }
      document.querySelector("#s").style.display = "block";
    }
  }, 500);
</script>

<p id="s" style="display: none;"></p>

<p style="width:100%;text-align:center;"><span style="color: #ffa726;">{{ site.games | size }}</span> games and counting!</p>

<section class="game-grid">
  {% for game in site.games %}
    <a href="{{ game.url | relative_url }}" class="game-card" title="{{ game.title }}">
      <img src="{{ game.image }}" alt="{{ game.title }}">
      <div class="game-title">{{ game.title }}</div>
    </a>
  {% endfor %}
</section>

<style>
  /* Game grid container */
  .game-grid {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 15px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
  }

  /* Each game card */
  .game-card {
    position: relative;
    display: block;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  /* Game cover image */
  .game-card img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 16px;
    display: block;
  }

  /* Title overlay - initially hidden */
  .game-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.6);
    color: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 8px 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 0 0 16px 16px;
    pointer-events: none;
  }

  /* Show title on hover */
  .game-card:hover .game-title {
    opacity: 1;
  }
</style>
