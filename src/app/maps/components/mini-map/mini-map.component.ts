import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {Map, Marker} from 'mapbox-gl';
@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{
  @ViewChild('map') divMap?: ElementRef;

  @Input() lngLat?:[number,number]

  ngAfterViewInit(): void {
    if (!this.divMap) {
      return;
    }
    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 9, // starting zoom,
      interactive:false
    });

    const marker:Marker = new Marker().setLngLat(this.lngLat!).addTo(map);
  }

}
