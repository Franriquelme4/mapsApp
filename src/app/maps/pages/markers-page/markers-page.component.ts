import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';
interface MarkerAndColor {
  marker: Marker,
  color: string
}
interface PlainMarker {
  color: string,
  lngltn: number[]
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit {
  markers: MarkerAndColor[] = [];
  @ViewChild('map') divMap?: ElementRef;
  mapReference?: Map;
  lngLat: LngLat = new LngLat(-57.406861, -25.371599)
  ngAfterViewInit(): void {
    if (!this.divMap) {
      return;
    }
    this.mapReference = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
    this.readToLocalStorage();
  }

  createMarker() {
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const center: LngLat = this.mapReference?.getCenter()!;
    this.addMarker(center, color);
  }



  addMarker(lngLat: LngLat, color: string) {
    console.log(this.mapReference?.getCenter());

    if (!this.mapReference) return;

    const marker = new Marker({
      color: color,
      draggable: true
    }).setLngLat(lngLat)
      .addTo(this.mapReference)
    this.markers.push({
      marker: marker,
      color: color
    });
    this.saveToLocalStorage();

    marker.on('dragend',()=>{
      this.saveToLocalStorage();
    })
  }


  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1)
  }


  flyTo(marker: Marker) {
    this.mapReference?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {
    const plainMarker: PlainMarker[] = [];
    this.markers.forEach(data => {
      plainMarker.push({
        color: data.color,
        lngltn: data.marker.getLngLat().toArray()
      })
    })
    localStorage.setItem('plainMarker', JSON.stringify(plainMarker));
  }

  readToLocalStorage() {
    const plainMarkerString = localStorage.getItem('plainMarker') ?? '[]';
    const plainMarkes: PlainMarker[] = JSON.parse(plainMarkerString!);
    plainMarkes.forEach(data => {
      const coord = new LngLat(data.lngltn[0], data.lngltn[1]);
      this.addMarker(coord, data.color)
    })
  }

}
