import { Component, model } from '@angular/core';

@Component({
  selector: 'app-zoom',
  standalone: true,
  imports: [],
  templateUrl: './zoom.component.html',
  styleUrl: './zoom.component.scss'
})
export class ZoomComponent {
  public zoom = model<number>(100);

  public zoomOut() {
    this.changeZoom(-10);
  }

  public zoomIn() {
    this.changeZoom(10);
  }

  private changeZoom(zoomChange: number) {
    const newZoom = this.zoom() + zoomChange;
    if (newZoom >= 10) {
      this.zoom.set(newZoom);
    }
  }
}
