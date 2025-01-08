import interact from 'interactjs';

import type { SvgInHtml, SvgPolygonInHtml, OriginalPoints } from '@/types';
import { applyTransforms } from '@/utilities/applyTransforms';
import { convertPointsToCoordinates } from '@/utilities/convertPointsToCoordinates';
import { movingPointDetection } from '@/utilities/movingPointDetection';

const root: SvgInHtml = document.getElementById('root') as SvgInHtml;
const polygonFront: SvgPolygonInHtml = document.getElementById('rectFront') as SvgPolygonInHtml;
const polygonLeft: SvgPolygonInHtml = document.getElementById('rectLeft') as SvgPolygonInHtml;
const polygonTop: SvgPolygonInHtml = document.getElementById('rectTop') as SvgPolygonInHtml;
const polygonRight: SvgPolygonInHtml = document.getElementById('rectRight') as SvgPolygonInHtml;
const polygonBottom: SvgPolygonInHtml = document.getElementById('rectBottom') as SvgPolygonInHtml;
const polygonBack: SvgPolygonInHtml = document.getElementById('rectBack') as SvgPolygonInHtml;

const rootMatrix = root.getScreenCTM() as DOMMatrix;
const originalPoints: OriginalPoints = [];
const transformedPoints: OriginalPoints = [];

convertPointsToCoordinates({
  root, originalPoints, polygon: polygonFront, polygonLocation: '1',
});
convertPointsToCoordinates({
  root, originalPoints, polygon: polygonLeft, polygonLocation: '2',
});
convertPointsToCoordinates({
  root, originalPoints, polygon: polygonTop, polygonLocation: '3',
});
convertPointsToCoordinates({
  root, originalPoints, polygon: polygonRight, polygonLocation: '4',
});
convertPointsToCoordinates({
  root, originalPoints, polygon: polygonBottom, polygonLocation: '5',
});
convertPointsToCoordinates({
  root, originalPoints, polygon: polygonBack, polygonLocation: '6',
});

interact(root).on('mousedown', () => { applyTransforms({ rootMatrix, transformedPoints, originalPoints }); }).on('touchstart', () => { applyTransforms({ rootMatrix, transformedPoints, originalPoints }); });

interact('.point-handle')
  .draggable({
    onstart: () => {
      root.setAttribute('class', 'dragging');
    },
    onmove: (event) => {
      const i = event.target.getAttribute('data-index') | 0;
      const dataPolygonLocation = event.target.getAttribute('data-polygon-location') | 0;

      movingPointDetection({
        event,
        rootMatrix,
        dataPolygonLocation,
        i,
        polygonFront,
        polygonLeft,
        polygonTop,
        polygonRight,
        polygonBottom,
        polygonBack,
      });
    },
    onend: () => {
      root.setAttribute('class', '');
    },
    modifiers: [
      interact.modifiers.snap({
        targets: originalPoints,
        range: 10,
        relativePoints: [{ x: 0.5, y: 0.5 }],
      }),
      interact.modifiers.restrict({
        restriction: 'parent',
      }),
    ],
    // restrict: { restriction: document.rootElement },
  })
  .styleCursor(false);

document.addEventListener('dragpolygon', (event) => {
  event.preventDefault();
});
