import interact from 'interactjs';

import type { ApplyTransformsType } from '@/types';

export const applyTransforms = ({
  rootMatrix,
  transformedPoints,
  originalPoints,
}: ApplyTransformsType) => {
  // rootMatrix = root?.getScreenCTM()

  transformedPoints = originalPoints.map((point) => point.matrixTransform(rootMatrix));

  interact('.point-handle').draggable({
    modifiers: [
      interact.modifiers.snap({
        targets: transformedPoints,
        range: 20 * Math.max(rootMatrix.a, rootMatrix.d),
      }),
    ],
  });
};
