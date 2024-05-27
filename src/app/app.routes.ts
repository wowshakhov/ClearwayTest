import { Routes } from '@angular/router';
import { DocumentViewerContainer } from './document-viewer/document-viewer-container.component';

export const routes: Routes = [
  {
    path: ':id',
    component: DocumentViewerContainer
  },
  {
    path: '',
    redirectTo: '/1',
    pathMatch: 'full'
  }
];
