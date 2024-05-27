import { Component, input, output } from '@angular/core';
import * as uuid from 'uuid';
import { AnnotationData } from '../../annotation-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-annotation-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './annotation-editor.component.html',
  styleUrl: './annotation-editor.component.scss'
})
export class AnnotationEditorComponent {
  annotationData = input.required<AnnotationData>();
  annotationSaved = output<AnnotationData>();
  text: string = "";
  imageData: string = "";

  public onImageUploaded(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (!file) {
      return;
    }
    const base64: Promise<string> = new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = event => {
        const fileReader = event.target as FileReader;
        resolve(fileReader.result as string);
      };
      reader.readAsDataURL(file);
    });
    base64.then(data => {
      this.imageData = data;
    });
  }

  public onSave() {
    const annotationData: AnnotationData = {
      ...this.annotationData(),
    };

    if (this.text) {
      annotationData.text = this.text;
    }

    if (this.imageData) {
      annotationData.image = this.imageData;
    }

    this.annotationSaved.emit(annotationData);
  }
}
