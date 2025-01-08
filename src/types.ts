export type SvgInHtml = HTMLElement & SVGGraphicsElement;

export type SvgPolygonInHtml = HTMLElement & SVGPolygonElement

export type OriginalPoints = DOMPoint[] | SVGPoint[];

export type ConvertPointsToCoordinatesType = {
  root: SvgInHtml,
  originalPoints: OriginalPoints,
  polygon: SvgPolygonInHtml,
  polygonLocation: string
}

export type ApplyTransformsType = {
  rootMatrix: DOMMatrix,
  transformedPoints: OriginalPoints,
  originalPoints: OriginalPoints
}

export type MovePointType = {
  event: any,
  rootMatrix: DOMMatrix,
  polygonType: SvgPolygonInHtml,
  item: number
}

export type MovingPointDetectionType = {
  event: any,
  rootMatrix: DOMMatrix,
  dataPolygonLocation: number,
  i: number,
  polygonFront:
  SvgPolygonInHtml,
  polygonLeft: SvgPolygonInHtml,
  polygonTop: SvgPolygonInHtml,
  polygonRight: SvgPolygonInHtml,
  polygonBottom: SvgPolygonInHtml,
  polygonBack: SvgPolygonInHtml
}
