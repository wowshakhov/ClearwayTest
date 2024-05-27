export interface AnnotationData {
  id: string;
  text?: string;
  image?: string;
  x: number;
  y: number;
  zoom: number;
  url: string;
}

export const adjustZoom = (annotation: AnnotationData, newZoom: number) => {
  annotation.x = annotation.x * newZoom / annotation.zoom;
  annotation.y = annotation.y * newZoom / annotation.zoom;
  annotation.zoom = newZoom;
};
