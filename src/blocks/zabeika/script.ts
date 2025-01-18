import interact from 'interactjs';

import { getDragAngle } from '@/utilities/getDragAngle';

interact('#zabeika')
  .draggable({
    onstart: (event) => {
      const element = event.target;
      const rect = element.getBoundingClientRect();
      element.dataset.centerX = rect.left + rect.width / 2;
      element.dataset.centerY = rect.top + rect.height / 2;
      element.dataset.angle = getDragAngle(event);
    },
    onmove: (event) => {
      const element = event.target;
      const angle = getDragAngle(event);
      element.style.transform = `rotateX(-0.5rad) rotateY(${angle * 2.5}rad)`;
    },
    onend: (event) => {
      const element = event.target;
      element.dataset.angle = getDragAngle(event);
    },
  });