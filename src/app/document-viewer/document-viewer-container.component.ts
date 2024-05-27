import { Component } from '@angular/core';
import { DocumentService } from '../document.service';
import { Observable } from 'rxjs';
import { Document } from '../document';
import { ActivatedRoute } from '@angular/router';
import { DocumentViewerComponent } from './document-viewer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-viewer-container',
  standalone: true,
  imports: [CommonModule, DocumentViewerComponent],
  template: `
    <app-document-viewer *ngIf="document$ | async as document" [document]="document"></app-document-viewer>
  `
})
export class DocumentViewerContainer {
  document$?: Observable<Document>;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.document$ = this.documentService.getDocument(id);
  }
}
