export const getDragAngle = (event: any) => {
  const element = event.target;
  const startAngle = parseFloat(element.dataset.angle) || 0.2;
  const angle = Math.atan2(
    -event.clientY,
    event.clientX,
  );
  return angle - startAngle;
};
