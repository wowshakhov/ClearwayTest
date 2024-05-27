import { Component, input, output } from '@angular/core';
import { Page } from '../document';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  page = input.required<Page>();
  zoom = input.required<number>();
  imageLoaded = output();
  annotationCreated = output<MouseEvent>();
  private naturalImageWidth = 0;

  public onImageLoad(event: HTMLElementEventMap['load']) {
    const imageElement = event.target as HTMLImageElement;
    const naturalWidth = imageElement.naturalWidth;
    this.naturalImageWidth = naturalWidth;
    this.imageLoaded.emit();
  }

  public imageWidth() {
    return this.naturalImageWidth * this.zoom() / 100;
  }

  public onCreateAnnotation(event: MouseEvent) {
    this.annotationCreated.emit(event);
  }
}
