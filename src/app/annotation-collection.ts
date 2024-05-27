import { AnnotationData } from "./annotation-data";

export class AnnotationCollection {
  collection: { [url: string]: AnnotationData[] } = {};

  addUrl(url: string) {
    this.collection[url] = [];
  }
  
  addAnnotation(annotation: AnnotationData) {
    this.getPage(annotation.url).push(annotation);
  }
  
  deleteAnnotation(annotation: AnnotationData) {
    const index = this.collection[annotation.url].findIndex(({ id }) => annotation.id === id);
    if (index > -1) {
      this.collection[annotation.url].splice(index, 1);
    }
  }
  
  getPage(url: string) {
    return this.collection[url];
  }
  
  getPages() {
    return Object.keys(this.collection).map(url => this.collection[url]);
  }
}
