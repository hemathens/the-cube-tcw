import { Game } from './script.js';

window.addEventListener('DOMContentLoaded', () => {
  const game = new Game({
    container: document.querySelector('.ui__game'),
    sizeControl: document.getElementById('prefs-controls'),
    startBtn: document.getElementById('start-btn'),
    resetBtn: document.getElementById('reset-btn'),
    statsEls: {
      size: document.getElementById('stat-size'),
      total: document.getElementById('stat-total'),
      best: document.getElementById('stat-best'),
      worst: document.getElementById('stat-worst'),
      av5: document.getElementById('stat-av5'),
      av12: document.getElementById('stat-av12')
    },
    timerEl: document.getElementById('timer')
  });
  game.init();
}); 