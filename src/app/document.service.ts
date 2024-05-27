import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient: HttpClient) { }

  getDocument(id: string) {
    return this.httpClient.get<Document>(`/${id}.json`);
  }
}
