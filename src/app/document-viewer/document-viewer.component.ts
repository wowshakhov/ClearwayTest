import { Component, input } from '@angular/core';
import { Document } from '../document';
import { CommonModule } from '@angular/common';
import { ZoomComponent } from '../zoom/zoom.component';
import { AnnotationEditorComponent } from '../annotation-editor/annotation-editor.component';
import { AnnotationComponent } from '../annotation/annotation.component';
import * as uuid from 'uuid';
import { AnnotationCollection } from '../annotation-collection';
import { AnnotationData, adjustZoom } from '../annotation-data';
import { ImageComponent } from '../image/image.component';
import { AnnotationDragDirective } from '../annotation-drag.directive';

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [CommonModule, ZoomComponent, AnnotationEditorComponent, AnnotationComponent, ImageComponent, AnnotationDragDirective],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.scss'
})
export class DocumentViewerComponent {
  document = input.required<Document>();
  zoom = 100;
  isLoaded = false;
  annotations = new AnnotationCollection();
  newAnnotationData: AnnotationData | null = null;

  public onImageLoad(url: string) {
    this.annotations.addUrl(url);
    if (this.annotations.getPages().length === this.document()?.pages.length) {
      this.isLoaded = true;
    }
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
    this.annotations.addAnnotation(annotationData);
    this.newAnnotationData = null;
  }

  public onAnnotationDeleted(annotationData: AnnotationData) {
    this.annotations.deleteAnnotation(annotationData);
  }

  public onZoomChange() {
    this.annotations.getPages().forEach(page => {
      page.forEach(annotation => {
        adjustZoom(annotation, this.zoom);
      });
    })
  }

  public onSave() {
    console.log(this.annotations);
  }
}
