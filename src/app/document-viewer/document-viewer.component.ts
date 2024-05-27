import { Component, input, viewChildren } from '@angular/core';
import { Document } from '../document';
import { CommonModule } from '@angular/common';
import { ZoomComponent } from '../zoom/zoom.component';
import { AnnotationEditorComponent } from '../annotation-editor/annotation-editor.component';
import { AnnotationData } from '../../annotation-data';
import { AnnotationComponent } from '../annotation/annotation.component';
import * as uuid from 'uuid';

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [CommonModule, ZoomComponent, AnnotationEditorComponent, AnnotationComponent],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.scss'
})
export class DocumentViewerComponent {
  pages = viewChildren<HTMLImageElement>('pageImage');
  document = input.required<Document>();
  zoom = 100;
  isLoaded = false;
  annotations: { [url: string]: AnnotationData[] } = {};
  newAnnotationData: AnnotationData | null = null;
  private naturalImageWidths: { [url: string]: number } = {};

  public onImageLoad(event: HTMLElementEventMap['load'], url: string) {
    const imageElement = event.target as HTMLImageElement;
    const naturalWidth = imageElement.naturalWidth;
    this.naturalImageWidths[url] = naturalWidth;
    this.annotations[url] = [];
    if (Object.keys(this.naturalImageWidths).length === this.document()?.pages.length) {
      this.isLoaded = true;
    }
  }

  public imageWidth(url: string) {
    return this.naturalImageWidths[url] * this.zoom / 100;
  }

  public createAnnotation(event: MouseEvent, url: string) {
    this.newAnnotationData = {
      id: uuid.v4(),
      x: event.offsetX,
      y: event.offsetY,
      zoom: this.zoom,
      url
    };
  }

  public onAnnotationAdded(annotationData: AnnotationData) {
    this.annotations[annotationData.url].push(annotationData);
    this.newAnnotationData = null;
  }

  public onAnnotationDeleted(annotationData: AnnotationData) {
    this.annotations[annotationData.url] = this.annotations[annotationData.url].filter(annotation => annotation.id !== annotationData.id);
  }

  public onAnnotationDragged(event: DragEvent, annotationData: AnnotationData) {
    annotationData.x += event.offsetX - 8;
    annotationData.y += event.offsetY - 12;
  };

  public onZoomChange() {
    Object.keys(this.annotations).forEach(page => {
      this.annotations[page].forEach(annotation => {
        annotation.x = annotation.x * this.zoom / annotation.zoom;
        annotation.y = annotation.y * this.zoom / annotation.zoom;
        annotation.zoom = this.zoom;
      });
    })
  }

  public onSave() {
    console.log(this.annotations);
  }
}
