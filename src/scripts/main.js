'use strict';

window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const leftOffset = (wallRect.width - spiderRect.width) / 2;
  const topOffset = (wallRect.height - spiderRect.height) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${leftOffset}px`;
  spider.style.top = `${topOffset}px`;
});
