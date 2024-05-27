import { Component, input, output } from '@angular/core';
import { AnnotationData } from '../annotation-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annotation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annotation.component.html',
  styleUrl: './annotation.component.scss',
})
export class AnnotationComponent {
  annotationData = input.required<AnnotationData>();
  annotationDeleted = output();

  public onDelete() {
    this.annotationDeleted.emit();
  }
}
