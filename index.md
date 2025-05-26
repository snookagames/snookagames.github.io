---
layout: default
title: SnookaGames
description: The best site to have fun anywhere online
---

<style>
  .game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    gap: 1.5rem;
    padding: 1rem 0;
  }
  .game-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
    text-align: center;
    padding: 1rem;
    transition: transform 0.2s ease;
  }
  .game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgb(0 0 0 / 0.15);
  }
  .game-thumb {
    width: 100%;
    max-width: 160px;
    border-radius: 12px;
    margin-bottom: 0.75rem;
  }
  .game-title {
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0.25rem 0;
  }
  .play-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
    display: inline-block;
  }
  .play-button:hover {
    background-color: #388E3C;
  }
</style>

<h1>Welcome to SnookaGames</h1>
<p>Choose a game to play!</p>

<div class="game-grid">
  {% for game in site.games %}
  <div class="game-card">
    <img src="{{ game.image }}" alt="{{ game.title }}" class="game-thumb" />
    <div class="game-title">{{ game.title }}</div>
    <a href="{{ game.url }}" class="play-button">Play Now ▶</a>
  </div>
  {% endfor %}
</div>
