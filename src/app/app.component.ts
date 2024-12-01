import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MapComponent],
  template: `
    <div class="app-container">
      <h1>{{ title }}</h1>
      <div class="location-info">
        <p>Posizione attuale: Roma - Città Eterna</p>
        <p>Coordinate: 41.9028°N, 12.4964°E</p>
      </div>
      <div class="map-wrapper">
        <app-map
          [center]="[41.9028, 12.4964]"
          [zoom]="20"
          markerTitle="Roma - Città Eterna"
        >
        </app-map>
      </div>
     
  `,
  styles: [
    `
      .app-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .location-info {
        background-color: #f5f5f5;
        padding: 10px 15px;
        border-radius: 5px;
        margin-bottom: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .location-info p {
        margin: 5px 0;
        color: #333;
        font-size: 16px;
      }

      .map-wrapper {
        flex: 1;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
    `,
  ],
})
export class AppComponent {
  title = 'Map App';
}
