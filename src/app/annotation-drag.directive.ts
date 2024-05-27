import { Directive, HostListener, input } from '@angular/core';
import { AnnotationData } from '../annotation-data';

@Directive({
  selector: '[appAnnotationDrag]',
  standalone: true,
})
export class AnnotationDragDirective {
  annotation = input.required<AnnotationData>({ alias: 'appAnnotationDrag' });

  @HostListener('dragend', ['$event']) 
  onDragEnd(event: MouseEvent) {
    console.log(event)
    // 8px and 12px shifts are needed to readjust the position of the 
    // dragged element so that the cursor is centered on the drag handle
    this.annotation().x += event.offsetX - 8;
    this.annotation().y += event.offsetY - 12;
  }
}
