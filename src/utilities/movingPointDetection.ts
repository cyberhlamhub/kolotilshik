import type { MovePointType, MovingPointDetectionType } from '@/types';

export const movePoint = ({
  event, rootMatrix, polygonType, item,
}: MovePointType) => {
  polygonType.points.getItem(item).x += event.dx / rootMatrix.a;
  polygonType.points.getItem(item).y += event.dy / rootMatrix.d;
  event.target.x.baseVal.value = polygonType.points.getItem(item).x;
  event.target.y.baseVal.value = polygonType.points.getItem(item).y;
};

export const movingPointDetection = ({
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
}: MovingPointDetectionType) => {
  if (dataPolygonLocation === 1 && i === 0) {
    movePoint({
      event, rootMatrix, polygonType: polygonFront, item: 0,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonLeft, item: 0,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBottom, item: 0,
    });
  }

  if (dataPolygonLocation === 1 && i === 1) {
    movePoint({
      event, rootMatrix, polygonType: polygonFront, item: 1,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonLeft, item: 1,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonTop, item: 1,
    });
  }

  if (dataPolygonLocation === 1 && i === 2) {
    movePoint({
      event, rootMatrix, polygonType: polygonFront, item: 2,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonTop, item: 2,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonRight, item: 1,
    });
  }

  if (dataPolygonLocation === 1 && i === 3) {
    movePoint({
      event, rootMatrix, polygonType: polygonFront, item: 3,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonRight, item: 0,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBottom, item: 3,
    });
  }

  if (dataPolygonLocation === 2 && i === 2) {
    movePoint({
      event, rootMatrix, polygonType: polygonLeft, item: 2,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonTop, item: 0,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBack, item: 0,
    });
  }

  if (dataPolygonLocation === 2 && i === 3) {
    movePoint({
      event, rootMatrix, polygonType: polygonLeft, item: 3,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBottom, item: 1,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBack, item: 1,
    });
  }

  if (dataPolygonLocation === 3 && i === 3) {
    movePoint({
      event, rootMatrix, polygonType: polygonTop, item: 3,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonRight, item: 2,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBack, item: 3,
    });
  }

  if (dataPolygonLocation === 5 && i === 2) {
    movePoint({
      event, rootMatrix, polygonType: polygonRight, item: 3,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBottom, item: 2,
    });
    movePoint({
      event, rootMatrix, polygonType: polygonBack, item: 2,
    });
  }
};
