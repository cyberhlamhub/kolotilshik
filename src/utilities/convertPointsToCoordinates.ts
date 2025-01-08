import type { ConvertPointsToCoordinatesType } from '@/types';

export const convertPointsToCoordinates = ({
  root,
  originalPoints,
  polygon,
  polygonLocation,
}: ConvertPointsToCoordinatesType) => {
  const sns = 'http://www.w3.org/2000/svg';
  const xns = 'http://www.w3.org/1999/xlink';

  for (let i = 0, len = polygon?.points.numberOfItems; i < len; i++) {
    const handle = document.createElementNS(sns, 'use');
    const point = polygon?.points.getItem(i);

    // TODO ресерч особенностей SVGPoint и DOMPoint
    // const newPoint = root?.createSVGPoint()
    const newPoint = new DOMPoint();

    handle.setAttributeNS(xns, 'href', '#point-handle');
    handle.setAttribute('class', 'point-handle');

    handle.x.baseVal.value = newPoint.x;
    handle.x.baseVal.value = point.x;
    handle.y.baseVal.value = newPoint.y;
    handle.y.baseVal.value = point.y;

    handle.setAttribute('data-polygon-location', polygonLocation);
    handle.setAttribute('data-index', `${i}`);

    originalPoints.push(newPoint);

    if (polygonLocation === '1') {
      root.appendChild(handle);
    }

    if (polygonLocation === '2' && (i === 2 || i === 3)) {
      root.appendChild(handle);
    }

    if (polygonLocation === '3' && i === 3) {
      root.appendChild(handle);
    }

    if (polygonLocation === '5' && i === 2) {
      root.appendChild(handle);
    }
  }
};
